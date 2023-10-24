import authService from '../services/auth.service.js'
import bcrypt from 'bcrypt';

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.loginService(email);

        if (!user) {
            return res.status(400).send({ message: "User or Password not found" });
        }

        const isValid = bcrypt.compareSync(password, user.password);

        if (!isValid) {
            return res.status(400).send({ message: "User or Password not found" });
        }

        const token = authService.generateToken(user.id);
        res.send({ token })

    } catch (err) {
        res.status(500).send({ message: err.message });
    }

}

export default { login }