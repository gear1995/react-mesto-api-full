const router = require('express').Router();

const {
  getUsers,
  getUsersById,
  updateProfile,
  updateAvatar,
  getCurrentUser,
} = require('../contollers/users');

const { validateUpdateAvatar, validateUpdateProfile, validateGetUsersById } = require('../middlewares/validator');

router.get('/', getUsers);

router.get('/me', getCurrentUser);

router.get('/:userId', validateGetUsersById, getUsersById);

router.patch('/me', validateUpdateProfile, updateProfile);

router.patch('/me/avatar', validateUpdateAvatar, updateAvatar);

module.exports = router;
