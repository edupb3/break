const User = require("../models/User");

const create = body => User.create(body);

const findAll = () => User.find();

const findById = id => User.findById(id);

const update = (
    id, 
    name, 
    username, 
    email, 
    avatar, 
    background) => User.findOneAndUpdate({_id:id}, {name, username, email, avatar, background});

module.exports = {
    create,
    findAll,
    findById,
    update
}