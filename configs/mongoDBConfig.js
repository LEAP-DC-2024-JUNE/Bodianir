const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log(`Connected to MongoDB on ${MONGO_URL}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
module.exports = connectDB;
