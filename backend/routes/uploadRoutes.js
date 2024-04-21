import path from "path";
import express from "express";
import multer from "multer";
import exp from "constants";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /jpg|jpeg|webp|svg|pdf|png/;
  const mimetypes = [
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "image/svg+xml",
    "application/pdf",
    "image/png",
  ];

  const extname = path.extname(file.originalname);
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("File type is not supported"), false);
  }
};

const upload = multer({ storage, fileFilter });

const uploadSingle = upload.single("image");

router.post("/", (req, res) => {
  uploadSingle(req, res, (err) => {
    if (err) {
      return res.status(400).send(err.message);
    } else if (req.file) {
      res.status(200).send({
        message: "Image upload successful",
        image: `/${req.file.path}`,
      });
    } else {
      res.status(400).send({ message: "No file uploaded" });
    }
  });
});

export default router;
