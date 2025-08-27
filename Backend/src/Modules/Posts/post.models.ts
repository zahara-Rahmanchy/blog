import { Schema, model } from "mongoose";

// 1. Define a TypeScript interface for Post
export interface IPost{
  title: string;
  content: string;
  author: string;
  image?: string; 

}

// 2. Define the Schema
const PostSchema: Schema = new Schema<IPost>(
  {
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
   
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);


const Post = model<IPost>("Post", PostSchema);
export default Post;
