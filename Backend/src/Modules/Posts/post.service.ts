import { Types } from "mongoose";
import Post, { IPost } from "./post.models";

const createPostintoDB = async (post:IPost) => {

  console.log('sendData: ', post);
  const result = await Post.create(post);

  return result;
};


const getPostsFromDB = async () => {

  const result = await Post.find().sort({createdAt:-1});
  return result;
};

const getPostsById = async (id:string) => {

  const result = await Post.findById(id)
  return result;
};

export const PostServices = {
  createPostintoDB,
  getPostsFromDB,
  getPostsById
}