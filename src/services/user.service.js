import User from "../models/User.js";

const create = body => User.create(body);

const findAll = () => User.find();

const findById = id => User.findById(id);

const update = (
    id,
    name,
    username,
    email,
    avatar,
    background) => User.findOneAndUpdate({ _id: id }, { name, username, email, avatar, background });

export default {
    create,
    findAll,
    findById,
    update
}