// App imports
import models from '../../setup/models'

//Membership by Id
export async function get(parentValue, { id }) {
    return await models.Membership.findOne({
        where: { id },
        include: [
            {model: models.User, as: 'user'},
            {model: models.Event, as: 'event'}
        ] 
    })
}

//Membership by User
export async function getByUser(parentValue, {}, { auth }) {
    if(auth.user && auth.user.id > 0) {
        return await models.Membership.findAll({
            where: {
                userId: auth.user.id
            },
            include: [
                { model: models.User, as: 'user'},
                {model: models.Event, as: 'event'},
            ]
        })
    } else {
        throw new Error('Please login to view your memberships.')
    }
}

//all memberships
export async function getAll() {
    return await models.Membership.findAll({
        include: [
            { model: models.User, as: 'user'},
            { model: models.Event, as: 'event'}
        ]
    })
}

//create Membership
export async function create(parentValue, { eventId }, { auth }) {
    if(auth.user && auth.user.id > 0 ) {
        return await models.Membership.create({
            eventId,
            userId: auth.user.id
        })
    } else {
        throw new Error('Please login to become a member of this event.')
    }
}

// delete membership
export async function remove(parentValue, {id}, { auth}) {
    if(auth.user && auth.user.id> 0) {
        return await models.Membership.destroy({where: {id, userId: auth.user.id}})
    } else {
        throw new Error('Acess Denied.')
    }
}