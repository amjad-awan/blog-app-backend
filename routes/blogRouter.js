import express from "express";
import { addCommentsController, blogPhotoController, createBlogController, getBlogController, getSingleBlogController, getSpecificUserBlogsController, likeDislikeController } from "../controllers/blogController.js";


import formidable from "express-formidable";
import { loginRequired } from "../middlewares/loginRequired.js";


const route = express.Router();
route.post("/create-blog",formidable(),createBlogController);
route.get("/get-blogs",getBlogController);
route.get("/get-single-blog/:blogId",getSingleBlogController);
route.get("/get-photo/:blogId",blogPhotoController);
route.get("/get-specific-user-blogs/:blogerId",getSpecificUserBlogsController);
route.put("/like-dislike/:blogId", loginRequired,likeDislikeController);
route.post("/comment/:blogId",addCommentsController);
export default route;