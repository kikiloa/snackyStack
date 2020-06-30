//imports
import { GraphQLString, GraphQLInt } from 'graphql'

//app imports
import { MerchandiseType } from './types'
import { crete, update, remove } from './resolvers'

//merchandise create
export const merchandiseCreate = {
    type: merchandiseType,
    args: {
        name: {
            name: 'name',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },

        type: {
            name: 'type',
            type: GraphQLInt
        },

        gender: {
            name: 'gender',
            type: GraphQLInt
        },

        image: {
            name: 'image',
            type: GraphQLString
        }
    },
    resolve: create
}

// merchandise update
export const merchandiseUpdate = {
    type: MerchandiseType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        },

        name: {
            name: 'name',
            type: GraphQLString
        },

        slug: {
            name: 'slug',
            type: GraphQLString
        },

        description: {
            name: 'description',
            type: GraphQLString
        },

        type: {
            name: 'type',
            type: GraphQLInt
        },

        gender: {
            name: 'gender',
            type: GraphQLInt
        },

        image: {
            name: 'image',
            type: GraphQLString
        },
        resolve: update
    }
}

// merchandise remove
export const merchandiseRemove = {
    type: MerchandiseType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}