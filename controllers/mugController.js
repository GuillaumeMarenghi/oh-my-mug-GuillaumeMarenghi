const Mug = require('../models/mug');

module.exports = {

    getAll: async (request, response, next) => {
        response.json({data: await Mug.findAll()});
    },

    create: async (request, response, next) => {
        const mug = new Mug();
        Object.assign(mug, request.body);
        await mug.save();

        response.json({data: mug})
    },

    use: (request, response, next) => {
        
    },

    todo : (_, response) => {
        response.json({status: "todo"})
    },

}