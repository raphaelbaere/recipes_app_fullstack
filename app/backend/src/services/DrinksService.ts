import prismaClient from '../database/prismaClient';
import ApiError from '../utils/ApiError';

export default class DrinksService {
  static async getAllDrinks() {
    const drinks = await prismaClient.recipe.findMany({
      where: {
        type: 'drink'
      }
    });

    return drinks;
  }

  static async findOneRandom(id: number) {
    const randomDrink = await prismaClient.recipe.findUnique({
      where: {
        id
      },
    });

    if (!randomDrink) throw new ApiError(401, 'Invalid ID!');

    return randomDrink;
  }
}
