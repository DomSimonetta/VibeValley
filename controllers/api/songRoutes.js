const express = require('express');
const router = express.Router();
const songController = require('../songController');

// GET all songs
router.get('/', songController.getAllSongs);

// GET songs in a playlist
router.get('/:playlistId/songs', songController.getSongsInPlaylist);

module.exports = router;
