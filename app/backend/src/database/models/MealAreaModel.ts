import { Model, DataTypes } from "sequelize";
import db from ".";
import MealsModel from "./MealsModel";

export default class MealAreaModel extends Model {
  declare idArea: number;
  declare strArea: string;
}

MealAreaModel.init({
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strArea: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'area',
  timestamps: false,
});

// MealAreaModel.hasMany(MealsModel, {
//   foreignKey: 'idArea',
//   as: 'area',
// });
