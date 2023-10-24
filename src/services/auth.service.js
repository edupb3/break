import User from "../models/User.js";
import Jwt from "jsonwebtoken";

const loginService = (email) => User.findOne({ email: email }).select("+password")

const generateToken = (id) => Jwt.sign({ id: id }, process.env.JWT_SECRET, { expiresIn: '86400' })


export default { loginService, generateToken };