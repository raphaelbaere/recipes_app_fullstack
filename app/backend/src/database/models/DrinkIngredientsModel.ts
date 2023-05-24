import { DataTypes, Model } from "sequelize";
import DrinksModel from "./DrinksModel";
import db from ".";

export default class DrinkIngredientsModel extends Model {
  declare idIngredient: number;
  declare strIngredient: number;
}

DrinkIngredientsModel.init({
  idIngredient: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strIngredient: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'drinkIngredients',
  timestamps: false,
});

// DrinkIngredientsModel.hasMany(DrinksModel, {
//   foreignKey: 'idIngredient',
//   as: 'ingredients',
// });