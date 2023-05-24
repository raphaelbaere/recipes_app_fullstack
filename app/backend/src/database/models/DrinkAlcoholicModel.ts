import { Model, DataTypes } from "sequelize";
import db from ".";
import DrinksModel from "./DrinksModel";

export default class DrinkAlcoholicModel extends Model {
  declare idCategory: number;
  declare strCategory: string;
}

DrinkAlcoholicModel.init({
  idAlcoholic: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strAlcoholic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  tableName: 'alcoholic',
  timestamps: false,
});

DrinkAlcoholicModel.hasMany(DrinksModel, {
  foreignKey: 'idAlcoholic',
  as: 'alcoholic',
});
