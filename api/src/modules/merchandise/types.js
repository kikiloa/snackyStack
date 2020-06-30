// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Merchandise Type
const MerchandiseType = new GraphQLObjectType({
    name: 'merchandise',
    description: 'Merchandise Type',

    fields: () => ({
        id: { type: GraphQLInt},
        name: { type: GraphQLString},
        slug: { type: GraphQLString},
        type: { type: GraphQLInt },
        gender: { type: GraphQLInt },
        image: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

// User Gender Types
const MerchandiseTypesType = new GraphQLObjectType({
    name: 'merchandiseTypesType',
    description: 'User Types type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
})

export { MerchandiseType, MerchandiseTypesType }