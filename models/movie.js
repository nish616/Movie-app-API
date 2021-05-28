const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name : String,
    year : String,
    language : String,
    imageUrl : String,
    videoUrl : String
});

module.exports = mongoose.model('Movie', movieSchema);