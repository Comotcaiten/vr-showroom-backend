import multer from "multer";
import fs from "fs";
import path from "path";

export const createUploadMiddleware = (config) => {

  const { folder, allowedMimeTypes, maxSize } = config;

  // // Storage Local
  // tạo folder nếu chưa có
  // if (!fs.existsSync(folder)) {
  //   fs.mkdirSync(folder, { recursive: true });
  // }

  // // Storage Local
  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, folder);
  //   },
  //   filename: (req, file, cb) => {
  //     const ext = path.extname(file.originalname);
  //     const uniqueName =
  //       Date.now() + "-" + Math.round(Math.random() * 1e9);
  //     cb(null, uniqueName + ext);
  //   },
  // });

  const storage = multer.memoryStorage(); // đổi sang RAM

  const fileFilter = (req, file, cb) => {
    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"), false);
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: maxSize },
  });
};