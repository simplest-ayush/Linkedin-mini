import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, bio, password } = req.body

    if ([name, email, bio, password].some((field) =>
        field?.trim() === "")) {
        throw new ApiError(401, "All fields are required!")
    }

    const existedUser = await User.findOne({
        $or: [{ name }, { email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User with name or email already exist")
    }

    const user = await User.create({
        name: name,
        email: email,
        bio: bio,
        password
    })
    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

    // ✅ Set cookies
    const options = {
        httpOnly: true,
        secure: true, // false in dev
        sameSite: "lax",
    };

    // ✅ Return response
    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(201, createdUser, "User registered successfully")
        );

    // return res.status(201).json(
    //     new ApiResponse(201, createdUser, "User registered successfully")
    // )
});

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating access and refresh token");
    }
}

const loginuser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!password && !email) {
        throw new ApiError(400, "password and email is required")
    }

    const user = await User.findOne({ email })
    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }
    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in successfully"
            ))
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1,
            }
        },
        {
            new: true
        }
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged out"))
})


const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id)
        if (!user) {
            throw new ApiError(401, "Invalid Refresh Token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is not valid or expired")
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id)

        const options = {
            httpOnly: true,
            secure: true
        }

        // console.log("New refresh token is : ", newRefreshToken);


        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        accessToken,
                        refreshToken: newRefreshToken
                    },
                    "Access token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, "Invalid Refresh Token")
    }

})

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                req.user,
                "user fetched successfully"
            )
        )
})

const updateUserDetails = asyncHandler(async (req, res) => {
    const { bio, email } = req.body

    if (!bio || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                bio,
                email
            }
        },
        {
            new: true,
        }
    ).select("-password")

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                user,
                "User details updated successfully"
            )
        )
})


export {
    registerUser,
    loginuser,
    logoutUser,
    refreshAccessToken,
    getCurrentUser,
    updateUserDetails
}