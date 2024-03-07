const User = require('./user');
const Playlist = require('./playlist');
const Song = require('./song');
const Comment = require('./comment');
const Likes = require('./likes');

User.hasMany(Playlist, {
    foreignKey: 'userId',
    as: 'playlists'
});
Playlist.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

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
User.hasMany(Likes, {
    foreignKey: 'userId',
    as: 'likes'
});

Song.hasMany(Comment, {
    foreignKey: 'songId',
    as: 'comments'
});
Song.hasMany(Likes, {
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

Likes.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});
Likes.belongsTo(Song, {
    foreignKey: 'songId',
    as: 'song'
});

module.exports = { User, Playlist, Song, Comment, Likes };