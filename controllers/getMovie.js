const Movie = require('../models/movie');

async function addNote(req, res) {
    try {
        
        const movies = await Movie.find();
        return res.send({sucess : true, result : movies});
    
    } catch (err) {
       return res.send({sucess : false, error: err});
    }

}

module.exports = addNote;