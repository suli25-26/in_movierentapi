import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('rentals', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    movieId: { type: DataTypes.INTEGER,  allowNull: false  },
    customerId: { type: DataTypes.INTEGER,  allowNull: false  },
    dueDate: { type: DataTypes.DATEONLY,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('rentals');
}

export { up, down }
