'use strict'

// Merchandise
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('merchandise', {
    name: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    type: {
        type: DataTypes.INTEGER 
    },
    gender: {
        type: DataTypes.INTEGER
    },
    image: {
        type: DataTypes.TEXT
    }        
    })
}