const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();
const {
  getMovies,
  addMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    // eslint-disable-next-line no-useless-escape
    image: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    // eslint-disable-next-line no-useless-escape
    trailerLink: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    // eslint-disable-next-line no-useless-escape
    thumbnail: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    movieId: Joi.number().required(),
  }),
}), addMovie);
router.delete('/movies/:movieId', celebrate({
  params: Joi.object().keys({
    moviesId: Joi.string().required().min(24).max(24),
  }),
}), deleteMovie);

module.exports = router;
