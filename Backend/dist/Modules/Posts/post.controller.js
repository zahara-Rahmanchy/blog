"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostControllers = void 0;
const post_service_1 = require("./post.service");
const mongoose_1 = require("mongoose");
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_service_1.PostServices.createPostintoDB(req.body);
        console.log('result: ', result);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Post created successfully',
            data: result,
        }); // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        console.log('error:', error, '\n', 'prop', error.properties);
        return res.status(500).json({ message: "Server error" });
    }
});
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_service_1.PostServices.getPostsFromDB();
        console.log('result: ', result);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Posts retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});
const getPostsUsingId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Check if ID is valid
    if (!mongoose_1.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid post ID" });
    }
    try {
        const result = yield post_service_1.PostServices.getPostsById(id);
        console.log('result: ', result);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Post retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});
exports.PostControllers = {
    createPost,
    getPostsUsingId,
    getPosts
};
