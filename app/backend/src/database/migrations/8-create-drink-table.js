module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('drinks', {
      idDrink: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strDrink: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'idCategory',
        },
      },
      alcoholicId: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'alcoholic',
          key: 'idAlcoholic',
        },
      },
      strInstructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strDrinkThumb: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strIngredient1: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strIngredient2: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strIngredient3: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strIngredient4: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strIngredient5: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strIngredient6: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'ingredients',
          key: 'idIngredient',
        },
      },
      strMeasure1: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
      strMeasure2: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
      strMeasure3: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
      strMeasure4: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
      strMeasure5: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
      strMeasure6: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'measures',
          key: 'idMeasure',
        },
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('drinks');
  },
};
