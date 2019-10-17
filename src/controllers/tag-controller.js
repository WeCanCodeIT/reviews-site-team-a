const TagDomainObject = require('../models/Tag');
const tagService = require('../services/tag-service');
const Tag = require('../models/Tag.sequelize');

class TagController { 

    static async renderAll (req, res) {
        try {
            const tags = await tagService.findAll();
            res.render("tag", {tags: tags});

        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async renderTag (req, res) {
        const id = req.params.id;
        try{
            const tag = await tagService.findTag(id) 
            res.render("tag", { tag : tag });
        } catch (error) {
            res.render("error", {error: error});
        }
    }

    static async addTag (req, res) {

        const name = req.body.tag;
        try{
            await tagService.save(new tagDomainObject(name));
            res.redirect("/");
        } catch(error) {
            res.render("error", {error: error});
        }
    }     
}


module.exports = TagController;