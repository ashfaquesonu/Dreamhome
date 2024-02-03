import express from "express";
import {  deleteEngineer, getAllEngineers, updateEngineer } from "../controllers/engineers.js";

const router = express.Router();

// router.route('/').post(addEngineers);
router.route("/getAllEngineers").get(getAllEngineers);
router.put("/updateEngineer/:id", updateEngineer);
router.delete("/deleteEngineer/:id", deleteEngineer);

export default router