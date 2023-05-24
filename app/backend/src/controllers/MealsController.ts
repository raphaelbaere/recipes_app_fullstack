import { Request, Response } from 'express';
import { MealsAttributes } from '../database/models/MealsModel';
import MealsService from '../services/MealsService';

export default class MealsController {
  constructor(
    private _mealsService: MealsService = new MealsService(),
  ) {}

  public static getAll = async (req: Request, res: Response):
  Promise<Response<MealsAttributes[]>> => {
    const { q } = req.query;
    const meals = await MealsService.getAll();
    if (q) {
      const filteredMealsByName = meals.filter((meal) => meal.strMeal.includes(q as string));
      return res.status(200).json(filteredMealsByName);
    }
    return res.status(200).json(meals);
  };

  public static findByFirstLetter = async (req: Request, res: Response):
  Promise<Response<MealsAttributes[]>> => {
    const { q } = req.query;
    const meals = await MealsService.getAll();
    const filteredMealsByFirstLetter = meals.filter((meal) => meal.strMeal.startsWith(q as string));
    return res.status(200).json(filteredMealsByFirstLetter);
  };

  public static getRandom = async (req: Request, res: Response):
  Promise<Response<MealsAttributes>> => {
    const randomNumber = (Math.random() * 6).toString()
    const meal = await MealsService.findOne(randomNumber);
    return res.status(200).json(meal);
  };
}