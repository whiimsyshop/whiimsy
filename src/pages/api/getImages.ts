import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const galleryPath = path.join(process.cwd(), "public/gallery");
    const files = fs.readdirSync(galleryPath);

    // Sort images alphabetically and numerically
    const sortedFiles = files.sort((a, b) => {
      const nameA = a.replace(/\D/g, ""); // Extract numbers
      const nameB = b.replace(/\D/g, "");

      const numA = nameA ? parseInt(nameA, 10) : NaN;
      const numB = nameB ? parseInt(nameB, 10) : NaN;

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB; // Sort numerically if both are numbers
      }
      return a.localeCompare(b, undefined, { numeric: true }); // Sort alphabetically
    });

    const images = sortedFiles.map(file => `/gallery/${file}`);

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: "Failed to load images" });
  }
}
