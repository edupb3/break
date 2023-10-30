import { createService, findAllService, getQtdRegisters } from "../services/news.service.js";


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

        let { limit, offset } = req.query;

        const news = await findAllService(limit, offset);
        const currentUrl = req.baseUrl;

        if (news.length === 0) {
            return res.status(401).send({ message: "No registered news found" })
        }

        const qtdRegisters = await getQtdRegisters();
        let p_limit = Number(limit);
        let p_offset = Number(offset);

        const next = p_offset + p_limit;
        const previous = p_offset - p_limit < 0 ? null : p_offset - p_limit;

        const nextURL = next < qtdRegisters ? `${currentUrl}?limit=${p_limit}&offset=${next}` : null;

        const previousURL = previous != null ? `${currentUrl}?limit=${p_limit}&offset=${previous}` : null;

        return res.send({
            nextURL,
            previousURL,
            limit,
            offset,
            total: qtdRegisters,
            results: news.map(item => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                userAvatar: item.user.avatar,
                background: item.user.background
            }))


        });

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export {
    create,
    findAll
}