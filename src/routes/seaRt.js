import express from "express";
import { HomeIndex } from "../controllers/seaCon.js";

export const seaRt = express.Router();
    seaRt.get("/", HomeIndex);



