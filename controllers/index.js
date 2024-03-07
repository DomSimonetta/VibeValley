const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const commentRoutes = require('./comment-routes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/comment', commentRoutes);
router.use('/login', loginRoutes);

module.exports = router;
