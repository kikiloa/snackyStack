// imports
import { GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

//app imports
import { UserType } from '../user/types'
import EventType from '../event/types'

// Membership Type
const MembershipType = new GraphQLObjectType({
    name: 'membership',
    description: 'Membership Type',

    fields: () => ({
        id: { type: GraphQLInt },
        user: { type: UserType },
        event: { type: EventType },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default MembershipType