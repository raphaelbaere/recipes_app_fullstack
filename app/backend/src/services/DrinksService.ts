import ApiError from '../utils/ApiError';
import DrinkModel, { DrinksAttributes } from '../database/models/DrinksModel';

export default class DrinksService {
  static async getAllDrinks(): Promise<DrinksAttributes[]> {
    const drinks = await DrinkModel.findAll();

    return drinks;
  }

  static async findOneRandom(idDrink: number): Promise<DrinksAttributes> {
    const randomDrink = await DrinkModel.findOne({
      where: {
        idDrink,
      },
    });

    if (!randomDrink) throw new ApiError(401, 'Invalid ID!');

    return randomDrink;
  }
}
