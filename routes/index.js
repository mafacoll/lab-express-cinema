const express = require('express');
const router = express.Router();
const MovieModel = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* movies route, render movies.hbs*/

router.get('/movies', (req, res, next) => {
    MovieModel.find()
    .then((titles) =>{
        res.render('movies.hbs', {titles})
    })
    .catch((err) =>{
        next(err)
    })
})

module.exports = router;
