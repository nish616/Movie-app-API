const Movie = require('../models/movie');

async function addNote(req, res) {
    try {

        // console.log(req.body);
        // console.log(req.file.filename);

        const { name , year, language } = req.body;
        const imageUrl = 'http://localhost:3000/images/' + req.file.filename;
        const newMovie = new Movie({
            name : name,
            year : year,
            language : language,
            imageUrl : imageUrl
        });

        await newMovie.save();
        
        return res.send({sucess : true});
    } catch (err) {
       return res.send({sucess : false, error: err});
    }

}

module.exports = addNote;