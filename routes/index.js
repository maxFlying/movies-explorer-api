const router = require('express').Router();

const { validateLogin, validateRegister } = require('../validation/validation');

const NotFoundError = require('../errors/not-found-err');
const { auth } = require('../middlewares/auth');
const { register, login, logout } = require('../controllers/users');

router.post('/signin', validateLogin, login);

router.post('/signup', validateRegister, register);

router.use(auth);

router.post('/signout', logout);

router.use('/', require('./users'));

router.use('/', require('./movies'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый путь не существует.'));
});

module.exports = router;
