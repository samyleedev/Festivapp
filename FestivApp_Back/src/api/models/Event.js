import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    artists: {
      id: { type: String },
      time: { type: String },
      stage: { type: String },
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;
