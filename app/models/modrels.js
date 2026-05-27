import User from './user.js';
import sequelize from '../database/database.js'
import Movie from './movie.js';
import Rental from './rental.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Movie = Movie;
db.Rental = Rental;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
