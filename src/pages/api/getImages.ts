import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const galleryPath = path.join(process.cwd(), "public/gallery");
    const files = fs.readdirSync(galleryPath);

    const images = files.map(file => `/gallery/${file}`); // Return image URLs
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to load images" });
  }
}
