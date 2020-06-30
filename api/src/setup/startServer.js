// app imports
// import models from '../setup/models'
import config from '../config/config.json'

// sync database tables and start server
export default function(server) {
    console.info('SETUP - Syncing database tables...')

        // create tables
    // models.sequelize.sync({}).
    //     then(() => {
    //         console.info('INFO - Database sync complete.')

    //         console.info('SETUP - starting server...')
    //     })
    
        //start server
    server.listen(config.port, (error) => {
        if (error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on http://localhost:${ config.port }.`)
        }
    })
    // .catch(() => {
    //     console.error('ERROR - Unable to sync database.')
    //     console.error('ERROR - Server not started.')
    // })
}