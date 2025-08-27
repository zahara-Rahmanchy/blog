import express from 'express';
import { PostControllers } from './post.controller';

const router = express.Router();

// post route to create and store product
router.post('/posts', PostControllers.createPost);

router.get('/posts', PostControllers.getPosts);

router.get('/posts/:id', PostControllers.getPostsUsingId);

export const PostRoutes = router;
