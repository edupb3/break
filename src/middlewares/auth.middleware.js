import Jwt from "jsonwebtoken";
import userService from "../services/user.service.js";

export const userAuthenticate = async (req, res, next) => {
    try {
        const { authorization } = req.headers;

        const header = authorization.split(' ');

        if (header.length != 2) {
            return res.status(401).send({ message: "Invalid Token" });
        }
        if (header[0] != 'Bearer') {
            return res.status(401).send({ message: "Invalid Token" });
        }
        const token = header[1];
        const decoded = Jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).send({ message: "Invalid Token" });
        }

        const user = await userService.findById(decoded.id);

        if (!user && !user.id) {
            return res.status(401).send({ message: "User not found" })
        }

        req.userId = user.id;

        next();
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}