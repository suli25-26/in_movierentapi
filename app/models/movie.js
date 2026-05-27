import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Movie = sequelize.define('movies', {
    title: { type: DataTypes.STRING,  allowNull: false  },
    director: { type: DataTypes.STRING,  allowNull: false  },
    releaseYear: { type: DataTypes.INTEGER,  allowNull: false  },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Movie
