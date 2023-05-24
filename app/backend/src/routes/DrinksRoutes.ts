import { Router } from 'express';
import DrinksController from '../controllers/DrinksController';
import queryStringMiddleware from '../middlewares/queryString.middleware';

const DrinksRouter = Router();

DrinksRouter.get('/drinks/name', queryStringMiddleware, (req, res) => DrinksController.getAll(req, res));
DrinksRouter.get('/drinks/letter', queryStringMiddleware, (req, res) => DrinksController.findByFirstLetter(req, res));
DrinksRouter.get('/drinks/random', (req, res) => DrinksController.getRandom(req, res));

export default DrinksRouter;
