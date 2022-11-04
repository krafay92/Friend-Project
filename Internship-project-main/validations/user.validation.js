import Joi from "joi";

const schema = {
  register: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email:Joi.string().required(),
      password:Joi.string().required(),
    }),
  },
  

  
};

export default schema;
