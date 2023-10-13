const { default: mongoose } = require("mongoose");
const userService = require("../services/user.service");

const create = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;    
    if(!name|| !username|| !email || !password || !avatar || !background){
        return res.status(400).send({
            message:"Submit all fields for registration"
        })
    }
    
    const user = await userService.create(req.body);

    if(!user){
        return res.status(400).send({
            message:"Error on create User"
        })
    }

    return res.status(201).send({
        message: "user created succesfully",
        user: {
            id: user._id,
            name,username,email,avatar,background
        }
    })
};

const findAll = async (req, res) => {
    const users = await userService.findAll();
    
    if (users.length === 0){
        return res.status(401).send({message: "No registered users found"})
    }
    
    return res.status(200).send(users);
}

const findById = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id not valid"})
    }

    const user = await userService.findById(id);  

    if(!user){
        return res.status(401).send({message: "User not found"})
    }

    return res.send(user);
}

const update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const user = await userService.update(id, body);
    if(!user){
        return res.status(401).send({message: "Method Not Allowed"})
    }
    return res.status(204).send({
        message:"User update successfully"        
    });
}


module.exports = {create, findAll, findById, update};