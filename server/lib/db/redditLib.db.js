const mongoose = require('mongoose'),
    config = require('config');

let db;
if (config.database.reddit.opts) db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);
else db = mongoose.createConnection(config.database.reddit.uri);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Reddit DB connected to MongoDB: ' + config.database.reddit.uri);
});

const Post = exports.postSchema = mongoose.Schema({
    title: String,
    url: String,
    thumbnail: String,
    numComments: Number,
    score: Number,
    dateUtc: Date,
    permalink: String,
    id: String,
    type: String
}, {id: false});

const Comment = mongoose.Schema({
    author: String,
    upvotes: Number,
    downvotes: Number,
    score: Number,
    body: String,
}, {id: false});

Comment.add({ replies: [Comment] });

let feedSchema = mongoose.Schema({
    subreddit: String,
    channel: String,
    posts: [Post]
}, { collection: 'feeds'});

feedSchema.index({'subreddit': 1, 'channel': 1});

exports.Feed = db.model('Feed', feedSchema);

exports.CommentTree = db.model('CommentTree', mongoose.Schema({
    postId: String,
    subreddit: String,
    replies: [Comment]
}, { collection: 'comments' }));