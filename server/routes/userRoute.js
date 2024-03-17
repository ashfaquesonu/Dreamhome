import express from "express";
import { getUsers, authUser,registerUser, mail,} from "../controllers/userController.js";

const router = express.Router();

router.route('/').post(registerUser).get(getUsers)
router.route('/login').post(authUser)
router.route('/mail').post(mail)


export default router