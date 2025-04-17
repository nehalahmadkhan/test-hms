import express from "express";
import { getAll, create } from "../controllers/patient";
const router = express.Router();

router.route("/").get(getAll).post(create);

export default router;
