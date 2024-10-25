import Joi from 'joi';

// Contact validation schema
export const validateContact = (contact) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().min(5).max(255).required(),
    timezone: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(contact);
};
