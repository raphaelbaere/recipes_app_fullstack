import { StatusCodes } from 'http-status-codes';
import ApiError from '../utils/ApiError';
import DrinkModel, { DrinkAttributes } from '../database/models/Drink';

export default class DrinksService {
  static async getAllDrinks(): Promise<DrinkAttributes[]> {
    const drinks = await DrinkModel.findAll();

    return drinks;
  }

  static async findOneRandom(idDrink: number): Promise<DrinkAttributes> {
    const randomDrink = await DrinkModel.findOne({
      where: {
        idDrink,
      },
    });

    if (!randomDrink) throw new ApiError(StatusCodes.UNAUTHORIZED, 'Invalid ID!');

    return randomDrink;
  }
}
