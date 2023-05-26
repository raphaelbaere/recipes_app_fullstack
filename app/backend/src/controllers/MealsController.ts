import { Request, Response } from 'express';
import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(
    private _mealsService: MealsService = new MealsService(),
  ) {}

  public static getAll = async (req: Request, res: Response) => {
    const { q } = req.query;
    const meals = await MealsService.getAllMeals();
    if (q) {
      const filteredMealsByName = meals.filter((meal) => meal.name.includes(q as string));
      return res.status(200).json(filteredMealsByName);
    }
    return res.status(200).json(meals);
  };

  public static findByFirstLetter = async (req: Request, res: Response) => {
    const { q } = req.query;
    const meals = await MealsService.getAllMeals();
    const filteredMealsByFirstLetter = meals.filter((meal) => meal.name.startsWith(q as string));
    return res.status(200).json(filteredMealsByFirstLetter);
  };

  public static getRandom = async (req: Request, res: Response) => {
    const randomNumber = (Math.random() * 6)
    const meal = await MealsService.findOneRandom(randomNumber);
    return res.status(200).json(meal);
  };
}