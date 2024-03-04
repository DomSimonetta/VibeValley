const sequelize = require('../config/connection');
const { User, Song, Playlist, Comment } = require('../models');

const userData = require('./userData.json');
const songData = require('./songData.json');
const playlistData = require('./playlistData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Song.bulkCreate(songData);
    await Playlist.bulkCreate(playlistData);
    await Comment.bulkCreate(commentData);

    process.exit(0);
};

seedDatabase();