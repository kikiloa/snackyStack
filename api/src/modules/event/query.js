// imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// app imports
import EventType from './types'
import { getAll, getById } from './resolvers'

// Events all
export const events = {
    type: new GraphQLList(EventType),
    args: {
        orderBy: { type: GraphQLString }
    },
    resolve: getAll
}

// Event by Id
export const eventById = {
    type: EventType,
    args: {
        eventId: { type: GraphQLInt }
    },
    resolve: getById
}