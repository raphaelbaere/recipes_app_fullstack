import { NextFunction, Request, Response } from 'express';
import queryStringSchema from '../Joi/schemas';

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = queryStringSchema.validate(req.query);

  if (error) {
    return res.status(400).json({ message: error.message });
  }
};
