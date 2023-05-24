import * as Joi from 'joi';

const queryStringSchema = Joi.object({
  q: Joi.string().required(),
});

export default queryStringSchema;
