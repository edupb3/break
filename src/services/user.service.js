const User = require("../models/User");

const create = body => User.create(body);

const findAll = () => User.find();

const findById = id => User.findById(id);

const update = (id, user) => User.findByIdAndUpdate(id, user);

module.exports = {
    create,
    findAll,
    findById,
    update
}