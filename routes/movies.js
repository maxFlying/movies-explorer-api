const router = require('express').Router();
const { validateAddMovie, validateDeleteMovie } = require('../validation/validation');
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', validateAddMovie, addMovie);
router.delete('/movies/:movieId', validateDeleteMovie, deleteMovie);

module.exports = router;
