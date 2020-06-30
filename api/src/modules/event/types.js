// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Events Type
const EventType = new GraphQLObjectType({
    name: 'Event',
    description: 'Event Type',

    fields: () => ({
        id: { type: GraphQLInt},
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        createdAt: { type: GraphQLString},
        updatedAt: { type: GraphQLString}
    })
})

export default EventType