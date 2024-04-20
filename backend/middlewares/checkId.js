import { isValidObjectId } from "mongoose";

function checkId(req, res, next) {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  next();
}

export default checkId;
