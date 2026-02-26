import dotenv from "dotenv";
dotenv.config();
import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export const uploadFile = async (buffer) => {
  const result = await client.files.upload({
    file: buffer.toString('base64'),
    fileName: 'image.jpg',
  }
  )
  return result
};
