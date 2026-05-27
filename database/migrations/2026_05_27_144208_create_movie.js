import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('movies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: { type: DataTypes.STRING,  allowNull: false  },
    director: { type: DataTypes.STRING,  allowNull: false  },
    releaseYear: { type: DataTypes.INTEGER,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('movies');
}

export { up, down }
