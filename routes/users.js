const { celebrate, Joi } = require('celebrate');
const router = require('express').Router();

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/users/me', getUserInfo);
router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUserInfo);

module.exports = router;
