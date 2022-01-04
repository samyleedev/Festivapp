import express from "express";
import { signUp, login, logout } from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.post("/signup", signUp);
authRoute.post("/login", login);
authRoute.get("/logout", logout);

export default authRoute;
