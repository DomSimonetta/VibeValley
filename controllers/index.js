const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const commentRoutes = require('./comment-routes');
const loginRoutes = require('./loginRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/comments', commentRoutes);
router.use('/login', loginRoutes);

module.exports = router;
