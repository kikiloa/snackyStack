// app imports
import models from '../../setup/models'
import params from '../../config/params.json'


// Get Event by ID
export async function getByID(parentValue, { eventId }) {
    const event = await models.Event.findOne({ where: { id: eventId } })

    if (!event) {
        // Event does not exist
        throw new Error('The Event you are looking for does not exist or has expired.')
    } else {
        return event
    }
}

// Get all Events
export async function getAll(parentValue, { orderBy }) {
    return await models.Event.findAll({ order: [['id', orderBy ]]})
}

// Create Event
export async function create(parentValue, { name, description }, { auth }) {
    if(auth.user && auth.user.role === params.user.roles.admin) {
        return await models.Event.create({
            name,
            description
        })
    } else {
        throw new Error('Operation Denied.')
    }
}

// Update Event
export async function update(parentValue, {id, name, description}, {auth}) {
    if(auth.user && auth.user.role == params.user.roles.admin) {
        return await models.Event.create({
            name,
            description
        },
        {where: {id}}
        )
    } else {
        throw new Error('Operation Denied.')
    }
}

// Delete Event
export async function remove(parentValue, { id }, { auth}) {
    if(auth.user && auth.user.role === params.user.roles.admin) {
        return await models.Event.destroy({where: {id}})
    } else {
        throw new Error('Operation Denied.')
    }
}