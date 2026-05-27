import Rental from '../models/rental.js'

const RentalController = {
    async index(req, res) {
        try {
            await RentalController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const rentals = await Rental.findAll()
        res.status(200)
        res.json({
            success: true,
            data: rentals
        })
    },
    async show(req, res) {
        try {
            await RentalController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const rental = await Rental.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: rental
        })
    },
    async store(req, res) {
        try {
            await RentalController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const rental = await Rental.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: rental
        })
    },
    async update(req, res) {
        try {
            await RentalController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Rental.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const rental = await Rental.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: rental
        })
    },
    async destroy(req, res) {
        try {
            await RentalController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const rental = await Rental.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: rental
        })
    }
}

export default RentalController
