// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User Type
const UserType = new GraphQLObjectType({
    name: 'user',
    description: 'User Type',

    fields: () => ({
        id: { type: GraphQLInt},
        name: { type: GraphQLString},
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

// User Login Type
const UserLoginType = new GraphQLObjectType({
    name: 'userAuth',
    description: 'User Authentication Type',

    fields: () => ({
        user: { type: UserType },
        token: { type: GraphQLString}
    })
})

//User Gender Type
const UserGenderType = new GraphQLObjectType({
    name: 'userGender',
    description: 'User Gender Type',

    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    })
})

export { UserType, UserLoginType, UserGenderType}