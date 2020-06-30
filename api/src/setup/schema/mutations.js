//imports
import {GraphQLObjectType} from 'graphql'

//app imports
import * as event from '../../modules/event/mutations'
import * as membership from '../../modules/membership/mutations'
import * as merchandise from '../../modules/merchandise/mutations'
import * as user from '../../modules/user/mutations'

// mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: 'API Mutations [Create, Update, Delete]',

    fields: {
        ...user,
        ...merchandise,
        ...membership,
        ...event
    }
})

export default mutation