// imports
import { Sequelize } from 'sequelize'

// app imports
import env from '../config/env'
import databaseConfig from '../config/database.json'

// load database config
const databaseConfigEnv = databaseConfig[env]

// create new database connection
const connection = new Sequelize(
    databaseConfigEnv.database,
    databaseConfigEnv.username, 
    databaseConfigEnv.password, 
    {
        host: databaseConfigEnv.host,
        dialect: databaseConfigEnv.dialect,
        logging: false,
        operatorsAliases: Sequelize.Op
    }
)

// test connection
console.info('SETUP - Connecting database...')

connection
    .authenticate()
    .then(() => {
        console.info('INFO - Database Connected.')
    })
    .catch(err => {
        console.error('ERROR - Unable to connect to the Database.', err)
    })

export default connection