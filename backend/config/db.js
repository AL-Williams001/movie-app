import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection to MongoDB Successful");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 means that the process will exit with an error code of 1. This will cause the process to exit with an error code of 1. This will cause the process to exit with an error code of 1. This will cause the process to exit with an error code of 1.
  }
};

export default connectDB;
