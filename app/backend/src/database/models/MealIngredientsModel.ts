import { DataTypes, Model } from "sequelize";
import MealsModel from "./MealsModel";
import db from ".";

export default class MealIngredientsArea extends Model {
  declare idIngredient: number;
  declare strIngredient: number;
}

MealIngredientsArea.init({
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
  tableName: 'mealIngredients',
  timestamps: false,
});

// MealIngredientsArea.hasMany(MealsModel, {
//   foreignKey: 'idIngredient',
//   as: 'ingredients',
// });