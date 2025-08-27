import { Request, Response } from "express";
import { PostServices } from "./post.service";
import { Types } from "mongoose";

const createPost = async (
  req: Request,
  res: Response,

) => {
  try {
   
    const result = await PostServices.createPostintoDB(req.body)

    console.log('result: ', result);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Post created successfully',
      data: result,
    }); // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log('error:', error, '\n', 'prop', error.properties);
    return res.status(500).json({ message: "Server error" });
  }
};

const getPosts =  async (req: Request, res: Response) => {
  
  try {
    const result = await PostServices.getPostsFromDB()

    console.log('result: ', result);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Posts retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}

const getPostsUsingId =  async (req: Request, res: Response) => {
  const { id } = req.params;

  // Check if ID is valid
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid post ID" });
  }

  try {
    const result = await PostServices.getPostsById(id)

    console.log('result: ', result);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Post retrieved successfully',
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
}


export const PostControllers = {
    createPost,
    getPostsUsingId,
    getPosts

}