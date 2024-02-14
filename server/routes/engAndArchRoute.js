import express from "express";
import {  deleteUser, getAllArchitectures, getAllEngineers, profileUpdate,updateRole } from "../controllers/engAndArch.js";

const router = express.Router();

// router.route('/').post(addEngineers);
router.route("/getAllEngineers").get(getAllEngineers);
router.route("/getAllArchitectures").get(getAllArchitectures);
router.put("/profileUpdate/:id", profileUpdate);
router.put("/updateRole/:id", updateRole);
router.delete("/deleteUser/:id", deleteUser);

export default router