const Mug = require('../models/mug');

module.exports = {

    getAll: async (_, response) => {
        response.json({data: await Mug.findAll()});
    },

    create: async (request, response) => {
        const mug = new Mug();
        Object.assign(mug, request.body);
        await mug.save();

        response.json({data: mug});
    },

    use: async (request, response) => {
        const mug = new Mug();
        const currentId = request.params.id;
        mug.id = currentId;
        await mug.use();

        response.json({data: await Mug.findOne(currentId)});
    },

    clean: async (request, response) => {
        const currentId = request.params.id;
        const mugToClean = await Mug.findOne(currentId);
        
        if (mugToClean[0].clean) {
            response.json({
                message: "le mug est déja propre",
                data: mugToClean
            });
            return
        }
        
        const mug = new Mug();
        mug.id = currentId;
        await mug.clean();

        response.json({data: await Mug.findOne(currentId)});
    },

    todo : (_, response) => {
        response.json({status: "todo"});
    },

}