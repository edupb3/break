import User from "../models/User.js";

const create = body => User.create(body);

const findAll = () => User.find().select("+password");

const findById = id => User.findById(id);

const update = (
    id,
    name,
    username,
    password,
    email,
    avatar,
    background) => User.findOneAndUpdate({ _id: id }, { name, username, password, email, avatar, background });

export default {
    create,
    findAll,
    findById,
    update
}