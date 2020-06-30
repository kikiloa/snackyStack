// imports
import graphqlHTTP from 'express-graphql'

// app imports
import config from '../config/config.json'
import authentication from './authentication'

import schema from './schema'

// setup graphQL
export default function (server) {
    console.info('SETUP - GraphQL ...')

    server.use(authentication)

    // API (GraphQL on route `/api`)
    server.use(config.graphqlEndpoint, graphqlHTTP((request) => ({
        schema,
        graphiql: config.graphql.ide,
        pretty: config.graphql.pretty,
        context: {
            auth: {
                user: request.user,
                isAuthenticated: request.user && request.user.id > 0
            }
        }
    })))
}