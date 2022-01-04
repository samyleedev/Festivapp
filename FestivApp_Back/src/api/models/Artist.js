import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_path: {
      type: String,
      required: true,
    },
    event_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", ArtistSchema);

export default Artist;
