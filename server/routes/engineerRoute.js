import express from "express";
import { addEngineers, getAllEngineers } from "../controllers/engineers.js";

const router = express.Router();

router.route('/').post(addEngineers);
router.route("/getAllEngineers").get(getAllEngineers);

export default router