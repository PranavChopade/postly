import express from "express";
import multer from "multer";
import { uploadFile } from "./src/services/storage.services.js";
import { Post } from "./src/models/post.models.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() })
app.post('/create-post', upload.single("image"), async (req, res) => {
  try {
    const result = await uploadFile(req.file?.buffer);
    const { caption } = req.body;
    const post = await Post.create({
      caption: caption,
      image: result?.url
    })
    res.status(201).json({ message: "post created", post })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.get('/get-posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default app;