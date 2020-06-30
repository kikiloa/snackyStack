//imports
import Sequelize from 'sequelize'

//app imports
import databaseConnection from './databaseConnection'

const models = {
    Event: databaseConnection.import('../modules/event/model'),
    Merchandise: databaseConnection.import('../modules/merchandise/model'),
    Membership: databaseConnection.import('../modules/membership/model'),
    User: databaseConnection.import('../modules/user/model')
}

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize
export default models