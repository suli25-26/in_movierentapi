import Router from 'express'
const router = Router()

import AuthController from '../controllers/authController.js';
import UserController from '../controllers/userController.js';
import verifyToken from '../middleware/authjwt.js';
import MovieController from '../controllers/movieController.js';
import RentalController from '../controllers/rentalController.js';
 
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', [verifyToken], UserController.index)
router.get('/users/:id', [verifyToken], UserController.show)
router.put('/users/:id/password', [verifyToken], UserController.updatePassword)
router.delete('/users/:id', [verifyToken], UserController.destroy)

//Filemek
router.get('/movies', [verifyToken], MovieController.index);
router.get('/movies/:id', MovieController.show);
router.post('/movies', [verifyToken], MovieController.store);
router.put('/movies/:id', MovieController.update);
router.delete('/movies/:id', MovieController.destroy);

//Kölcsönzések
router.get('/rentals', RentalController.index);
router.get('/rentals/:id', RentalController.show);
router.post('/rentals', RentalController.store);
router.put('/rentals/:id', RentalController.update);
router.delete('/rentals/:id', RentalController.destroy);

export default router
