"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
// post route to create and store product
router.post('/posts', post_controller_1.PostControllers.createPost);
router.get('/posts', post_controller_1.PostControllers.getPosts);
router.get('/posts/:id', post_controller_1.PostControllers.getPostsUsingId);
exports.PostRoutes = router;
