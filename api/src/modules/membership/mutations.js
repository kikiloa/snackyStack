//imports
import { GraphQLInt} from 'graphql'

//app imports
import MembershipType from './types'
import { create, remove } from './resolvers'

//Membership create
export const membershipCreate = {
    type: MembershipType,
    args: {
        createId: {
            name: 'createId',
            type: GraphQLInt
        }
    },
    resolve: create
}

//Membership remove
export const membershipRemove = {
    type: MembershipType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}
