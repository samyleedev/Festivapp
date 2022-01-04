import express from "express";
import { findAllUsers, findOneUser } from "../controllers/usersController.js";
import { authVerification } from "../controllers/authController.js";

const usersRoute = express.Router();

usersRoute.use("*", authVerification);

usersRoute.get("/", findAllUsers);
usersRoute.get("/:id", findOneUser);

export default usersRoute;
