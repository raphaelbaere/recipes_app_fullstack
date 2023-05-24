import { DataTypes, Model } from 'sequelize';
import db from '.';
import MealModel from './MealModel';

export interface IngredientAttributes {
  idIngredient: number;
  strIngredient: string;
}

export type IngredientCreationAttributes = Omit<IngredientAttributes, 'idIngredient'>;

class IngredientModel extends Model <IngredientAttributes, IngredientCreationAttributes> {
  declare idIngredient: number;
  declare strIngredient: string;
}

IngredientModel.init({
  idIngredient: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  strIngredient: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  underscored: false,
  sequelize: db,
  modelName: 'ingredients',
  timestamps: false,
});

IngredientModel.hasMany(MealModel, { as: 'strIngredient', foreignKey: 'strIngredientId' });

export default MealModel;
