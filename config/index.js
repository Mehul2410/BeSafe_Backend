const dotenv = require("dotenv");

dotenv.config();

const {
  PORT,
  DEBUG_MODE,
  DBURL,
  JWT_SECRET,
  REFRESH_SECRET,
  CLOUDINARY_USER_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
} = process.env;

module.exports = {
  PORT,
  DEBUG_MODE,
  DBURL,
  JWT_SECRET,
  REFRESH_SECRET,
  CLOUDINARY_USER_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
};
