'use strict'

// Membership
module.exports = function(sequelize, DataTypes) {
    let Membership = sequelize.define('memberships', {
        userId: {
            type: DataTypes.INTEGER
        },
        eventId: {
            type: DataTypes.INTEGER
        }
    })
    
    Membership.associate = function(models) {
        Membership.belongsTo(models.User)
        Membership.belongsTo(models.Event)
    }
    
    return Membership

}
