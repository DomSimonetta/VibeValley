const express = require('express');
const router = express.Router();
const songController = require('../songController');

// GET all songs
router.get('/', songController.getAllSong);

// GET songs in a playlist
router.get('/:playlistId/song', songController.getSongsInPlaylist);

module.exports = router;
