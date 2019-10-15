const Location = require('../models/Location.sequelize');

module.exports = {
    async findAll () {
        try {
            const location = await Location.findAll();
            return location;
        } catch (error) {
            return error;
        }
    },
    async findLocation (id) {
        try{
            const location = await Location.findByPk(id);
            return location;
        } catch (error){
            return error;
        }

    },
    async save (newLocation) {
        try{
            await Location.create(newLocation);
        } catch(error){
            return error;
        }
    }
}