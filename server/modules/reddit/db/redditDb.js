var mongoose = require('mongoose'),
    config = require('config');
var db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Reddit DB connected to MongoDB');
});

var Post = db.model('Post', mongoose.Schema({
    title: String,
    url: String,
    thumbnail: String,
    numComments: Number,
    score: Number,
    dateUtc: Date,
    permalink: String,
    id: String,
}, { collection: 'posts' }));

var CommentTree = db.model('CommentTree', mongoose.Schema({
    author: String,
    upvotes: Number,
    downvotes: Number,
    score: Number,
    body: String,
    replies: []
}, { collection: 'commentTrees' }));