//Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

//app imports
import { MerchandiseType, MerchandiseTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

//merchandise All
export const merchandises = {
    type: new GraphQLList(MerchandiseType),
    resolve: getAll
}

//merchandise by slug
export const merchandise = {
    type: MerchandiseType,
    args: {
        slug: { type: GraphQLString }
    },
    resolve: getBySlug
}

//merchandise by Id
export const merchandiseById = {
    type: MerchandiseType,
    args: {
        merchandiseId: { type: GraphQLInt }
    },
    resolve: getById
}

//merchandise related
export const merchandiseRelated = {
    type: new GraphQLList(MerchandiseType),
    args: {
        merchandiseId: { type: GraphQLInt}
    },
    resolve: getRelated
}

//merchandise types
export const merchandiseTypes = {
    type: new GraphQLList(MerchandiseTypesType),
    resolve: getTypes
}