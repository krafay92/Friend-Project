import Joi from "joi";

const schema = {
    register: {
        body: Joi.object().keys({
            episode_id: Joi.string().required(),
            time: Joi.string().required(),
            user_id: Joi.string().required(),
        }),
    },
    updateUser:{
        body: Joi.object().keys({
        time: Joi.string().required(),
    }),
}
};

export default schema;