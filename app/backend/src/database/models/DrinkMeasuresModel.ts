import { Model, DataTypes } from "sequelize";
import db from ".";
import DrinksModel from "./DrinksModel";

export default class DrinkCategoriesModel extends Model {
  declare idMeasure: number;
  declare strMeasure: string;
}

DrinkCategoriesModel.init({
  idMeasure: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strMeasure: {
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
//   foreignKey: 'idMeasure',
//   as: 'measures',
// });
