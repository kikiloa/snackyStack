//imports
import {GraphQLObjectType} from 'graphql'

//app imports
import * as event from '../../modules/event/query'
import * as membership from '../../modules/membership/query'
import * as merchandise from '../../modules/merchandise/query'
import * as user from '../../modules/user/query'

//query
const query = new GraphQLObjectType({
    name: 'query',
    description: 'API Queries [read]',

    fields: () => ({
        ...user,
        ...event,
        ...membership,
        ...merchandise
    })
})

export default query