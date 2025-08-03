import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { Post } from '../models/post.model.js'
import jwt from 'jsonwebtoken'
import { isValidObjectId } from "mongoose"
import { User } from "../models/user.model.js"

const createPost = asyncHandler(async (req, res) => {

    const { content } = req.body;
    if (!content || content.trim() === "") {
        throw new ApiError(400, "Post Content is required");
    }

    const userId = req.user?._id
    if (!userId) {
        throw new ApiError(400, "User not authenticated")
    }

    const post = await Post.create({
        author: userId,
        content,
    })

    const populatedPost = await post.populate("author", "name email")

    return res.status(201).json(
        new ApiResponse(201, populatedPost, "Post Created successfully")
    )
})

const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find()
        .sort({ createdAt: -1 })
        .populate("author", "name email")

    return res.status(200).json(
        new ApiResponse(200, posts, "Posts fetched successfully")
    )
})


const getPostsByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params
    // console.log("Requested userId:", userId);

    if (!isValidObjectId(userId)) {
        throw new ApiError(400, "Invalid UserId")
    }

    const user = await User.findById(userId)
    if (!user) {
        throw new ApiError(404, "User not found")
    }

    const posts = await Post.find({ author: userId })
        .sort({ createdAt: -1 })
        .populate("author", "name email");

    return res.status(200).json(
        new ApiResponse(200, posts, `Posts by user ${user.name} fetched successfully`)
    );
})



export {
    createPost,
    getAllPosts,
    getPostsByUser,
};