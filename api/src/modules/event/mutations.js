// imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App imports
import EventType from './types'
import { create, remove, update } from './resolvers'

// Event create
export const eventCreate = {
    type: EventType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: create
}

// Event update
export const eventUpdate = {
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },

        name: {
            name: 'name',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        }
    },
    resolve: update
}

// Event remove
export const eventRemove = {
    type: EventType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}