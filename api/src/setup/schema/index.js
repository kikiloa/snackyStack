// Imports
import {GraphQLSchema} from 'graphql'

//app imports
import query from './queries'
import mutation from './mutations'

//schema
const schema = new GraphQLSchema({
    query,
    mutation
})

export default schema