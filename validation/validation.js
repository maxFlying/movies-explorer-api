const { celebrate, Joi } = require('celebrate');

module.exports.validateAddMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    trailerLink: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required().pattern(/(http|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/),
    movieId: Joi.number().required(),
  }),
});

module.exports.validateDeleteMovie = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
});

module.exports.validateUpdateUserInfo = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.validateRegister = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});
