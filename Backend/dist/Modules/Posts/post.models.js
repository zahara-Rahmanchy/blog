"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Define the Schema
const PostSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    author: {
        type: String,
        required: [true, "Author is required"],
        trim: true,
    },
    image: {
        type: String,
        required: false, // optional
        trim: true,
    },
}, {
    timestamps: true, // adds createdAt & updatedAt automatically
});
const Post = (0, mongoose_1.model)("Post", PostSchema);
exports.default = Post;
