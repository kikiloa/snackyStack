//imports
import {GraphQLObjectType} from 'graphql'

//app imports
import * as event from '../../modules/event'
import * as membership from '../../modules/membership'
import * as merchandise from '../../modules/merchandise'
import * as user from '../../modules/user'

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