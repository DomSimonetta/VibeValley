const User = require('./user');
const Playlist = require('./playlist');
const Song = require('./song');
const Comment = require('./comment');
const Likes = require('./likes');

User.hasMany(Playlist, {
    foreignKey: 'userId',
    as: 'playlists',
    onDelete: 'CASCADE'
});

Playlist.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
});

Playlist.hasMany(Song, {
    foreignKey: 'playlist_id',
    as: 'songs',
    onDelete: 'CASCADE'
});

Song.belongsTo(Playlist, {
    foreignKey: 'playlist_id',
    as: 'playlist'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comments',
    onDelete: 'CASCADE'
});
User.hasMany(Likes, {
    foreignKey: 'user_id',
    as: 'likes',
    onDelete: 'CASCADE'
});

Song.hasMany(Comment, {
    foreignKey: 'song_id',
    as: 'comments',
    onDelete: 'CASCADE'
});
Song.hasMany(Likes, {
    foreignKey: 'song_id',
    as: 'likes',
    onDelete: 'CASCADE'
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