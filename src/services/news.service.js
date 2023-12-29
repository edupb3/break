import News from '../models/News.js';

export const createService = body => News.create(body);

export const findAllService = (limit = 3, offset = 0) => {
    return News.find()
        .sort({ _id: -1 })
        .limit(limit)
        .skip(offset)
        .populate("user");
}
export const getQtdRegisters = () => News.countDocuments();

export const findTopNewsService = () => News.findOne().sort({ _id: -1 }).populate("user");

export const findByIdService = id => News.findById(id).populate("user");