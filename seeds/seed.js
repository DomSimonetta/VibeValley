const sequelize = require('../config/connection');
const { User, Song, Playlist, Like, Comment } = require('../models');

const userData = require('');
const songData = require('');
const playlistData = require('');
const likeData = require('');
const commentData = require('');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Need to update the model name once we have that established
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // Will we have a model for more things than just the user?

    process.exit(0);
};

seedDatabase();