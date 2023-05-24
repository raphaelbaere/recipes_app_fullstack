import { Model, DataTypes } from "sequelize";
import db from ".";
import DrinksModel from "./DrinksModel";

export default class DrinkCategoriesModel extends Model {
  declare idCategory: number;
  declare strCategory: string;
}

DrinkCategoriesModel.init({
  idCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'drinkCategories',
  timestamps: false,
});

// DrinkCategoriesModel.hasMany(DrinksModel, {
//   foreignKey: 'idCategory',
//   as: 'categories',
// });
