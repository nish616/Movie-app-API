const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();

// Require controllers
const addMovies = require('./controllers/addMovie');
const getMovies = require('./controllers/getMovie');

// Require middlewears
const imageUpload = require('./middlewears/imageUpload')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

app.use(cors());
app.use(logger('dev'));

//app.use('/images', express.static(path.join('images')));

try{
    // Require Db connection
    require("./db/db");

    app.use('/images', express.static(path.join(__dirname,'./images')));

    app.get("/movies", getMovies);
    app.post("/movies", imageUpload, addMovies);

} catch(e){
    console.log(e);
}

finally{
    let port = process.env.PORT;
    if (port == null || port == "") {
     port = 3000;
    }
    app.listen(port, console.log(`Listening at port ${port} `));
}