const express = require('express');
const router = express.Router();
const commentController = require('../commentController');

// POST a comment on a song
router.post('/:songId/comments', commentController.postComment);

// GET comments on a song
router.get('/:songId/comments', commentController.getCommentsOnSong);

module.exports = router;
