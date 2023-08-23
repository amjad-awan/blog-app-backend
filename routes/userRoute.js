import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

const route = express.Router();

route.post("/register-user", registerController);
route.post("/login-user", loginController);

export default route;
