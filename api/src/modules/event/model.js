'use strict'

// Event
module.exports = function(sequelize, DataTypes) {
    let Event = sequelize.define('events', {
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        }
    })

    Event.associate = function(models) {
        Event.hasMany(models.Merchandise)
    }
    return Event
}