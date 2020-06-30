//App imports
import params from '../../config/params.json'
import models from '../../setup/models'

//All merchandise
export async function getAll() {
    return await models.Merchandise.findAll({ order: [['id', 'DESC']]})
}

//merchandise by slug
export async function getBySlug(parentValue, { slug }) {
    const merchandise = await models.Merchandise.findOne({ where: { slug }})

    if (!merchandise) {
        //merchandise doesn't exist
        throw new Error('The merchandise you are looking for does not exist or has been discontinued')
    } else {
        return merchandise
    }
}

//get merchandise by Id
export async function getById(parentValue, { merchandiseId }) {
    const merchandise = await models.Merchandise.findOne({where: { id: merchandiseId }})

    if (!merchandise) {
        //merchandise doesn't exist
        throw new Error('The product you are looking for does not exist or has been discontinued.')
    } else {
        return merchandise
    }
}

//get related merchandise
export async function getRelated(parentValue, { merchandiseId} ) {
    return await models.Merchandise.findAll({
        where: {
            id: { [models.Sequelize.Op.not]: merchandiseId}
        },
        limit: 3,
        order: [[models.Sequelize.fn('RAND')]] // mock related merchandise by showing random
    })
}

//create merchandise
export async function create(parentValue, { name, slug, description, type, gender, image}, {auth}) {
    if(auth.user && auth.user.role === params.roles.admin) {
        return await models.Merchandise.create({
            name,
            slug,
            description,
            type, 
            gender,
            image
        })
    } else {
        throw new Error('Operation Denied.')
    }
}

//update merchandise
export async function update(parentValue, {id, name, slug, description, type, gender, image}, {auth}) {
    if(auth.user && auth.user.role === params.user.roles.admin) {
        return await models.Merchandise.update(
            {
                name,
                slug,
                description,
                type,
                gender,
                image
            },
            { where: {id} }
        )
    } else {
        throw new Error('Operation Denied.')
    }
}

//remove merchandise
export async function remove(parentValue, {id}, { auth }) {
    if(auth.user && auth.user.role === params.user.roles.admin) {
        const merchandise = await models.Merchandise.findOne({where: {id}})

        if (!merchandise) {
            //merchandise doesn't exist
            throw new Error('The product does not exist.')
        } else {
            return await models.Merchandise.destroy({where: {id}})
        }
    } else {
        throw new Error('Operation denied.')
    }
}

//merchandise types
export async function getTypes() {
    return Object.values(params.product.types)
}


