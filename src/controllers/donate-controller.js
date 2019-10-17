const locationDomainObject = require('../models/Location');
const locationService = require('../services/location-service');
const Location = require('../models/Location.sequelize');

class DonateController { 

    static async addLocation (req, res) {

        const name = req.body.location;
        try{
            await locationService.save(new locationDomainObject(name));
            res.redirect("/location");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     

    static async renderAll (req, res) {
        try {
            const locations = await locationService.findAll();
            res.render("donate", {locations: locations});

        } catch (error) {
            res.render("error", {error: error});
        }
    }

}


module.exports = DonateController;