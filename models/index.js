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
    foreignKey: 'playlist_id',
    as: 'songs'
});

Song.belongsTo(Playlist, {
    foreignKey: 'playlist_id',
    as: 'playlist'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comments'
});
User.hasMany(Likes, {
    foreignKey: 'user_id',
    as: 'likes'
});

Song.hasMany(Comment, {
    foreignKey: 'song_id',
    as: 'comments'
});
Song.hasMany(Likes, {
    foreignKey: 'song_id',
    as: 'likes'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
Comment.belongsTo(Song, {
    foreignKey: 'song_id',
    as: 'song'
});

Likes.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
Likes.belongsTo(Song, {
    foreignKey: 'song_id',
    as: 'song'
});

module.exports = { User, Playlist, Song, Comment, Likes };