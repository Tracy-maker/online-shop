import multer from "multer";

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: function (req, file, cb) {
    return cb(
      null,
      `${file.filename}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

export default upload;
