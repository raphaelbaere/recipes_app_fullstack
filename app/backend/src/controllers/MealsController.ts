import { Request, Response } from 'express';
import { MealAttributes } from '../database/models/MealModel';
import MealsService from '../services/MealsService';
import { StatusCodes } from 'http-status-codes';

export default class MealsController {
  constructor(
    private _mealsService: MealsService = new MealsService(),
  ) {}

  public static getAll = async (req: Request, res: Response):
  Promise<Response<MealAttributes[]>> => {
    const { q } = req.query;
    const meals = await MealsService.getAll();
    if (q) {
      const filteredMealsByName = meals.filter((meal) => meal.strName.includes(q as string));
      return res.status(StatusCodes.OK).json(filteredMealsByName);
    }
    return res.status(StatusCodes.OK).json(meals);
  };

  public static findByFirstLetter = async (req: Request, res: Response):
  Promise<Response<MealAttributes[]>> => {
    const { q } = req.query;
    const meals = await MealsService.getAll();
    const filteredMealsByFirstLetter = meals.filter((meal) => meal.strName.startsWith(q as string));
    return res.status(StatusCodes.OK).json(filteredMealsByFirstLetter);
  };

  public static getRandom = async (req: Request, res: Response):
  Promise<Response<MealAttributes>> => {
    const randomNumber = (Math.random() * 6).toString()
    const meal = await MealsService.findOne(randomNumber);
    return res.status(StatusCodes.OK).json(meal);
  };
}