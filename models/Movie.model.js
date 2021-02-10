const mongoose = require('mongoose'); // mongoose schema
const Schema = mongoose.Schema;

const movieSchema = new Schema({
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]
})

// similat to create the constructor of the object
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
