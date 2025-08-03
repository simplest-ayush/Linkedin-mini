import { Router } from "express";
import { registerUser, loginuser, logoutUser, refreshAccessToken, getCurrentUser, updateUserDetails } from '../controllers/user.controller.js'
import {verifyJWT} from '../middleware/auth.middleware.js'

const router=Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginuser)


// secured routes
router.route('/logout').post(verifyJWT, logoutUser)
router.route('/refresh-token').post(verifyJWT, refreshAccessToken)
router.route('/current-user').get(verifyJWT, getCurrentUser)
router.route('/update-account').patch(verifyJWT, updateUserDetails)

export default router