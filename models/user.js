import Joi from 'joi';

// User validation schema
export const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(255).required(),
  });

  return schema.validate(user);
};
