const {Schema, model} = require('mongoose');

const MovieShema = new Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String
    },
);

const MovieModel = model('movie', MovieShema)
module.exports = MovieModel;