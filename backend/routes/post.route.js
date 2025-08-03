import { Router } from "express";
import { createPost, getAllPosts, getPostsByUser } from '../controllers/post.controller.js'
import { verifyJWT } from '../middleware/auth.middleware.js'

const router = Router();

// secured Routes
router.route('/create-post').post(verifyJWT, createPost)
router.route('/get-all-posts').get(verifyJWT, getAllPosts)
router.route('/get-post/:userId').get(verifyJWT, getPostsByUser)

export default router