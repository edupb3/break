import express from 'express';
import { create, findAll } from '../controllers/news.controller.js'
import { userAuthenticate } from '../middlewares/auth.middleware.js';

const route = express.Router();
route.post("/", userAuthenticate, create);
route.get("/", userAuthenticate, findAll);

export default route;