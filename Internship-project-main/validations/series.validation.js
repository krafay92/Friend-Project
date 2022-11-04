import Joi from "joi";

const schema = {
    add: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            trailer: Joi.string().required(),
            genre_id: Joi.string().required(),
        }),
    },

};

export default schema;