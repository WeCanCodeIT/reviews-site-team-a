const locationDomainObject = require('../models/Location');
const locationService = require('../services/location-service');
const Location = require('../models/Location.sequelize');

class LocationController { 

    static async renderAll (req, res) {
        try {
            const locations = await locationService.findAll();
            res.render("location", {locations: locations});

        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async renderLocation (req, res) {
        const id = req.params.id;
        try{
            const location = await locationService.findLocation(id) 
            res.render("location", { location : location });
        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async addLocation (req, res) {

        const name = req.body.location;
        try{
            await locationService.save(new locationDomainObject(name));
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}


module.exports = LocationController;