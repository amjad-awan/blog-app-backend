import { log } from "console";
import blogModel from "../models/blogModel.js";

import fs from "fs";

// add blog
export const createBlogController = async (req, res) => {
  const { title, description, blogername, blogerid, likes, comments } =
    req.fields;

  const { photo } = req.files;
  try {
    //create blog
    const newBlog = await blogModel({
      title,
      description,
      blogername,
      blogerid,
      likes,
      comments,
    });
    if (photo) {
      newBlog.photo.data = fs.readFileSync(photo.path);
      newBlog.photo.contentType = photo.type;
    }
    await newBlog.save();
    res.status(200).json({
      success: true,
      message: "blog added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

// get blog
export const getBlogController = async (req, res) => {
  try {
    const newBlog = await blogModel.find();

    res.status(200).json({
      success: true,
      message: "blog fetched successfully!",
      blogs: newBlog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

// get specific user blogs
export const getSpecificUserBlogsController = async (req, res) => {
  const { blogerId } = req.params;
  try {
    const Blogs = await blogModel.find({ blogerid: blogerId });

    res.status(200).json({
      success: true,
      message: "blog fetched successfully!",
      blogs: Blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

// get single blog
export const getSingleBlogController = async (req, res) => {

  const { blogId } = req.params;

  try {
    const blog = await blogModel.findOne({ _id: blogId });

    res.status(200).json({
      success: true,
      message: "blog fetched successfully!",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

// likeDislikeController
export const likeDislikeController = async (req, res) => {
  const { blogId } = req.params;
  const { blogerid } = req.body;
  try {
    const blog = await blogModel.findOne({ _id: blogId });
    if (blog) {
      const alreadyLiked = blog.likes.includes(blogerid);
      if (alreadyLiked) {
        await blog.updateOne({ $pull: { likes: blogerid } });
        res.status(200).json({
          success: true,
          message: "Blog unliked",
        });
      } else {
        await blog.updateOne({ $push: { likes: blogerid } });
        res.status(200).json({
          success: true,
          message: "Blog liked",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

export const addCommentsController = async (req, res) => {
  const { blogId } = req.params;
  const { blogername, comment } = req.body;
  console.log("req.body",req.body, blogId)

  // Validate the blogId
  if (!blogId || !blogername || !comment) {
    return res.status(400).json({
      success: false,
      message: "Invalid input data",
    });
  }

  try {
    // Find the blog by ID and add the new comment in a single operation
    const blog = await blogModel.findByIdAndUpdate(
      blogId,
      { $push: { comment: { text: comment, blogername } } },
      { new: true, select: { comment: { $slice: -1 } } } // Return only the most recent comment
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }
    // Get the most recent comment
    const recentComment = blog.comment[0];
    res.status(200).json({
      success: true,
      message: "Comment added",
      comment: recentComment, // Return only the most recent comment
    });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// get photo
export const blogPhotoController = async (req, res) => {
   console.log("req.params.blogId",req.params.blogId)
  try {
    const blog = await blogModel.findById(req.params.blogId).select("photo");
    if (blog.photo.data){
      res.set("Content-type", blog.photo.contentType);
      return res.status(200).send(blog.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error: "this error" + error,
    });
  }
};

