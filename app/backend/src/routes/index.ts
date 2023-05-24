import { Router } from 'express';
import MealsRoutes from './MealsRoutes';
import DrinksRouter from './DrinksRoutes';

const routes: Router = Router();

routes.use(MealsRoutes);
routes.use(DrinksRouter);

export default routes;
