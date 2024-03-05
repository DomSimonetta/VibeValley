const express = require('express');
const router = express.Router();
const playlistController = require('../playlistController');

// GET all playlists
router.get('/', playlistController.getAllPlaylists);

// GET playlists by mood
router.get('/:mood', playlistController.getPlaylistsByMood);

module.exports = router;