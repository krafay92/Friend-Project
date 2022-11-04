import Joi from "joi";

const schema = {
    register: {
        body: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            season_id: Joi.string().required(),
        }),
    },

};

export default schema;