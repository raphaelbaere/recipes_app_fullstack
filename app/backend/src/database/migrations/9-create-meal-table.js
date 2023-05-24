module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meals', {
      idMeal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      strMeal: {
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
      areaId: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'areas',
          key: 'idArea',
        },
      },
      strInstructions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strYoutube: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strTags: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      strMealThumb: {
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
    await queryInterface.dropTable('meals');
  },
};
