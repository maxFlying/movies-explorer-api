const router = require('express').Router();
const { validateUpdateUserInfo } = require('../validation/validation');

const {
  getUserInfo,
  updateUserInfo,
} = require('../controllers/users');

router.get('/users/me', getUserInfo);
router.patch('/users/me', validateUpdateUserInfo, updateUserInfo);

module.exports = router;
