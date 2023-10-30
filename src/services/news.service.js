import News from '../models/News.js';

const createService = body => News.create(body);

const findAllService = (limit = 3, offset = 0) => {
    return News.find()
        .sort({ _id: -1 })
        .limit(limit)
        .skip(offset)
        .populate("user");
}
const getQtdRegisters = () => News.countDocuments();

export {
    createService,
    findAllService,
    getQtdRegisters
}