import { Request, Response, NextFunction } from 'express';
import ApiError from '../utils/ApiError';

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ApiError) {
    const { statusCode, message } = err;
    res.status(statusCode).json({ message });
  }

  res.status(500).json({ message: 'Internal Server Error' });
};

export default errorMiddleware;
