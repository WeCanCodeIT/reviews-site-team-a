// Tags, Cat need relationship with Tag & Category table
module.exports = (sequelize, type) => {
    return sequelize.define('reviews', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        description: { 
            type: STRING,
            allowNull: false
        },
        reviewItem: {
          type: STRING,
          allowNull: false
        },
        author: {
            type: STRING,
            allowNull: false
        },
        imgUrl: type.STRING,
        tags: type.STRING,
        category: type.STRING
    })
}