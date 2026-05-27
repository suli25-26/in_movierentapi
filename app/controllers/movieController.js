import Movie from '../models/movie.js'

const MovieController = {
    async index(req, res) {
        try {
            await MovieController.tryIndex(req, res)
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
        const movies = await Movie.findAll()
        res.status(200)
        res.json({
            success: true,
            data: movies
        })
    },
    async show(req, res) {
        try {
            await MovieController.tryShow(req, res)
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
        const movie = await Movie.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: movie
        })
    },
    async store(req, res) {
        try {
            await MovieController.tryStore(req, res)
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
        const movie = await Movie.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: movie
        })
    },
    async update(req, res) {
        try {
            await MovieController.tryUpdate(req, res)
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
        const recordNumber = await Movie.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const movie = await Movie.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: movie
        })
    },
    async destroy(req, res) {
        try {
            await MovieController.tryDestroy(req, res)
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
        const movie = await Movie.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: movie
        })
    }
}

export default MovieController
