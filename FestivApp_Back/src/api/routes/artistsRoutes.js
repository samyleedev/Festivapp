import express from "express";
import {
  findAllArtists,
  findOneArtist,
  addArtist,
  updateArtist,
  removeArtist,
} from "../controllers/artistsController.js";
import { authVerification } from "../controllers/authController.js";

const artistsRoute = express.Router();

// artistsRoute.use("*", authVerification);

artistsRoute.post("/", addArtist);

artistsRoute.get("/", findAllArtists);
artistsRoute.get("/:id", findOneArtist);

artistsRoute.put("/:id", updateArtist);
artistsRoute.delete("/:id", removeArtist);

export default artistsRoute;
