import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import queryStringSchema from '../Joi/schemas';

export default (req: Request, res: Response, next: NextFunction) => {
  const { error } = queryStringSchema.validate(req.query);

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message });
  }
};
