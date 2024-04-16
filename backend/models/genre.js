import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
    unique: true,
  },
});

export default mongoose.model("Genre", genreSchema);
