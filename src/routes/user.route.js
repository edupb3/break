import express from 'express';
import userController from '../controllers/user.controller.js';
import { validId, validUser } from "../middlewares/global.middleware.js";

const route = express.Router();
route.post('/', userController.create);
route.get("/", userController.findAll);
route.get("/:id", validId, validUser, userController.findById);
route.put("/:id", userController.update);

export default route;