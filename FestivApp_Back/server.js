import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  authRoutes,
  usersRoutes,
  artistsRoutes,
  eventsRoutes,
} from "./src/api/routes/index.js";
import { connectToDatabase } from "./src/config/dbConfig.js";
dotenv.config({ path: "./src/config/.env" });
const app = express();

connectToDatabase();
// pAM&(55f
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", authRoutes);
app.use("/users", usersRoutes);
app.use("/artists", artistsRoutes);
app.use("/events", eventsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Serveur started : ${process.env.PORT} `)
);
