//Imports
import {GraphQLInt, GraphQLList } from 'graphql'

//App Imports
import MembershipType from './types'
import { getAll, getByUser, get } from './resolvers'

//Membership All
export const memberships = {
    type: new GraphQLList(MembershipType),
    resolver: getAll
}

//Membership by user
export const membershipByUser = {
    type: new GraphQLList(MembershipType),
    resolve: getByUser
}

//Membership by Id
export const membership = {
    type: MembershipType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: get
}