import { createService, findAllService } from "../services/news.service.js";


const create = async (req, res) => {
    try {
        const body = req.body;
        const { title, text, banner } = body;
        if (!title && !text && !banner) {
            return res.status(400).send({
                message: "Submit all fields for registration"
            })
        }
        const news = await createService({
            title,
            text,
            banner,
            user: { _id: req.userId }
        });

        if (!news) {
            return res.status(400).send({ message: "Error on create News" })
        }

        return res.status(201).send({
            message: "news created succesfully",
            news
        })

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}

const findAll = async (req, res) => {
    try {
        const news = await findAllService();

        if (news.length === 0) {
            return res.status(401).send({ message: "No registered news found" })
        }

        return res.send(news);

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export {
    create,
    findAll
}