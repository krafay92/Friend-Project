import Joi from "joi";

const schema = {
  register: {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
};

export default schema;