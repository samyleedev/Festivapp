import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    artists: {
      type: [String],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", EventSchema);

export default Event;
