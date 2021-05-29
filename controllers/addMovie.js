const Movie = require('../models/movie');

async function addNote(req, res) {
    try {
        const { name , year, language } = req.body;
        console.log(req.files);
        let imageUrl = '',videoUrl = '';
        if(req.files){
            // imageUrl = 'http://localhost:3000/files/' + req.files.image[0].filename;
            // videoUrl = 'http://localhost:3000/files/' + req.files.video[0].filename;
            
            imageUrl = 'https://murmuring-tor-76353.herokuapp.com/files/' + req.files.image[0].filename;
            videoUrl = 'https://murmuring-tor-76353.herokuapp.com/files/' + req.files.video[0].filename;
        }
        
        const newMovie = {
            name : name,
            year : year,
            language : language,
            imageUrl : imageUrl,
            videoUrl : videoUrl
        };

        const movie = new Movie(newMovie);
        
        await movie.save();
        
        return res.send({sucess : true , result : newMovie});
    } catch (err) {
       return res.send({sucess : false, error: err});
    }

}

module.exports = addNote;