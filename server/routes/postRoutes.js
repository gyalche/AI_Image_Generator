import express from 'express';
import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../models/post.js';
dotenv.config();
const router = new express.Router();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all post;
router.get('/getPost', async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

//create a post;
router.post('/posts', async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});
export default router;
