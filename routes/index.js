const express = require('express');
const router = express.Router();
const Movie = require('./../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index', {
    title: 'Cinema Ironhack'
}));

router.get('/movies', (req, res, next) => {
    Movie
        .find()
        .then(moviesFromDB => res.render('movies', { moviesFromDB })) // moviesFromDB is the asme array I have seeded
        .catch((err) => console.log(err));
});

route.get('movie/:id', (req, res, next) => {
    Movie
        findById(req.params.id)
        .then()
        .catch((err) => console.log(err));
})

module.exports = router;