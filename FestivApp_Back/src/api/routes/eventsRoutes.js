import express from "express";
import {
  findAllEvents,
  findOneEvent,
  addEvent,
  updateEvent,
  removeEvent,
} from "../controllers/eventsController.js";
import { authVerification } from "../controllers/authController.js";

const eventsRoute = express.Router();

// artistsRoute.use("*", authVerification);

eventsRoute.post("/", addEvent);

eventsRoute.get("/", findAllEvents);
eventsRoute.get("/:id", findOneEvent);

eventsRoute.put("/:id", updateEvent);
eventsRoute.delete("/:id", removeEvent);

export default eventsRoute;
