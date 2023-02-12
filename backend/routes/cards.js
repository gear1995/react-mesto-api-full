const router = require('express').Router();

const {
  getCards,
  postCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../contollers/cards');

const { validatePostCard, validateCardId } = require('../middlewares/validator');

router.get('/', getCards);

router.post('/', validatePostCard, postCard);

router.delete('/:cardId', validateCardId, deleteCard);

router.put('/:cardId/likes', validateCardId, likeCard);

router.delete('/:cardId/likes', validateCardId, dislikeCard);

module.exports = router;
