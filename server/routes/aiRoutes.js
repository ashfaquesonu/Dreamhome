import express from "express";
import { aiRoute} from "../controllers/aiController.js";

const router = express.Router();

router.route('/').post(aiRoute)


export default router