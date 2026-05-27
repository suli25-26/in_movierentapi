import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Rental = sequelize.define('rentals', {
    movieId: { type: DataTypes.INTEGER,  allowNull: false  },
    customerId: { type: DataTypes.INTEGER,  allowNull: false  },
    dueDate: { type: DataTypes.DATEONLY,  allowNull: false  }
}, {
    timestamps: true,
    freezeTableName: true
})

export default Rental
