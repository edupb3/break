
const create = (req, res) => {
    const {name, username, email, password, avatar, background} = req.body;    
    if(!name|| !username|| !email || !password || !avatar || !background){
        return res.status(400).send({
            message:"Submit all fields for registration"
        })
    }
    return res.status(201).send({
        message: "user created succesfully",
        user: {
            name,username,email,avatar,background
        }
    })
};
module.exports = {create};