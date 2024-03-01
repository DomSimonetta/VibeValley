const User = require('./user');
const Playlist = require('./playlist');
const Song = require('./song');
const Comment = require('./comment');
const Like = require('./like');

Playlist.hasMany(Song, {
    foreignKey: 'playlistId',
    as: 'songs'
});
Song.belongsTo(Playlist, {
    foreignKey: 'playlistId',
    as: 'playlist'
});

User.hasMany(Comment, {
    foreignKey: 'userId',
    as: 'comments'
});
User.hasMany(like, {
    foreignKey: 'userId',
    as: 'likes'
});

Song.hasMany(Comment, {
    foreignKey: 'songId',
    as: 'comments'
});
Song.hasMany(Like, {
    foreignKey: 'songId',
    as: 'likes'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});
Comment.belongsTo(Song, {
    foreignKey: 'songId',
    as: 'song'
});

Like.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});
Like.belongsTo(Song, {
    foreignKey: 'songId',
    as: 'song'
});

module.exports = { User, Playlist, Song, Comment, Like };