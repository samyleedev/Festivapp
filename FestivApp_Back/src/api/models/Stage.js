import mongoose from "mongoose";

const StageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    events: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Stage = mongoose.model("Stage", StageSchema);

export default Stage;
