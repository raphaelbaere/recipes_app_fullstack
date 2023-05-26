import { Router } from 'express';
import DrinksController from '../controllers/DrinksController';

const DrinksRouter = Router();

DrinksRouter.get('/drinks/name', (req, res) => DrinksController.getAll(req, res));
DrinksRouter.get('/drinks/letter', (req, res) => DrinksController.findByFirstLetter(req, res));
DrinksRouter.get('/drinks/random', (req, res) => DrinksController.getRandom(req, res));
DrinksRouter.get('/drinks/categories', (req, res) => DrinksController.getAllDrinksCategories(req, res));

export default DrinksRouter;
