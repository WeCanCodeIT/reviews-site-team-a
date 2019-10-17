const Tag = require('../models/Tag.sequelize');

module.exports = {
    async findAll () {
        try {
            const tags = await Tag.findAll();
            return tags;
        } catch (error) {
            return error;
        }
    },
    async findTag (id) {
        try{
            const tag = await Tag.findByPk(id);
            return tag;
        } catch (error){
            return error;
        }

    },
    async save (newTag) {
        try{
            const tag = await Tag.create(newTag);
            return tag;
        } catch(error){
            return error;
        }
    },
}