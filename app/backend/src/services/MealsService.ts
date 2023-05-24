import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/ApiError';
import MealModel, { MealAttributes } from '../database/models/MealModel';

export default class MealsService {
  public static async getAll(): Promise<MealAttributes[]> {
    const meals = await MealModel.findAll();
    return meals;
  }

  public static async findOne(idMeal: string): Promise<MealAttributes> {
    const meals = await MealModel.findOne({
      where: {
        idMeal,
      },
    });
    if (!meals) {
      throw new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid ID');
    }
    return meals;
  }
}
