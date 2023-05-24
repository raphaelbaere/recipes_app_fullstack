import { Request, Response } from 'express';
import DrinksService from '../services/DrinksService';
import { StatusCodes } from 'http-status-codes';

export default class DrinksController {
  static async getAll(req: Request, res: Response) {
    const { q } = req.query;
    const drinks = await DrinksService.getAllDrinks();

    if(q) {
      const filteredDrinks = drinks.filter((drink) => drink.strName.includes(q as string));
      return res.status(StatusCodes.OK).json({ filteredDrinks });
    }

    return res.status(StatusCodes.OK).json({ drinks });
  }

  static async findByFirstLetter(req: Request, res: Response) {
    const { q } = req.query;
    const drinks = await DrinksService.getAllDrinks();
    const filteredDrinks = drinks.filter((drink) => drink.strName.startsWith(q as string));

    return res.status(StatusCodes.OK).json({ filteredDrinks })
  }

  static async getRandom(req: Request, res: Response) {
    const randomId = Math.floor(Math.random() * 7);
    const randomDrink = await DrinksService.findOneRandom(randomId);

    return res.status(StatusCodes.OK).json({ randomDrink });
  }
}