const Mug = require('../models/mug');

module.exports = {

    /**
     * middleware pour récupèrer et liste tous les mugs de la bdd
     * 
     * @async
     * @param {Object} _ - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tous les entrées de la table "mug"
     */

    getAll: async (_, response) => {
        response.json({data: await Mug.findAll()});
    },

    /**
     * middleware pour insèrer un nouveau mug dans la bdd
     * 
     * @async
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tous les champs du nouveau mug
     */

    create: async (request, response) => {
        const mug = new Mug();
        Object.assign(mug, request.body);
        await mug.save();

        response.json({data: mug});
    },

    /**
     * middleware pour utiliser un mug
     * 
     * @async
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tous les champs du mug utilisé
     */

    use: async (request, response) => {
        const mug = new Mug();
        const currentId = request.params.id;
        mug.id = currentId;
        await mug.use();

        response.json({data: await Mug.findOne(currentId)});
    },

    /**
     * middleware pour nétoyer un mug
     * 
     * @async
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} tous les champs du mug nétoyé plus un message si celui-ci est déja propre
     */

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