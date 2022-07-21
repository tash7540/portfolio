import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const createPost = async (req, res) => {
    const {name,email,subject,message } = req.body;
    console.log(name);
    console.log(req.body);
    const newPostMessage = new PostMessage({ name,email,subject,message})
    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export default router;
