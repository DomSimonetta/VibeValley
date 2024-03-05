const router = require('express').Router();
const userRoutes = require('./userRoutes');
const playlistRoutes = require('./playlistRoutes');
const songRoutes = require('./songRoutes');
const commentRoutes = require('./commentRoutes');
const likeRoutes = require('./likeRoutes');
const loginRoutes = require('./loginRoutes');

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/login", loginRoutes);

// API routes
router.use('/users', userRoutes);
router.use('/playlists', playlistRoutes);
router.use('/songs', songRoutes);
router.use('/comments', commentRoutes);
router.use('/likes', likeRoutes);

module.exports = router;
