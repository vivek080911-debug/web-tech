const express = require('express');
const { 
    getPopularMovies, 
    getMovieTrailer,
    getLiveChannels,
    getTVShows 
} = require('../controllers/movieController');

const router = express.Router();

router.get('/popular', getPopularMovies);

router.get('/trailer/:id', getMovieTrailer);

router.get('/live', getLiveChannels); 

router.get('/tvshows', getTVShows); 

module.exports = router;