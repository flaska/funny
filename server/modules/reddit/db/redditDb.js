var mongoose = require('mongoose'),
    config = require('config');
var db = mongoose.createConnection(config.database.reddit.uri, config.database.reddit.opts);

db.on('error', console.error.bind(console, 'MongoDB connection error. '));
db.once('open', function() {
    console.log('Reddit DB connected to MongoDB');
});

const Post = mongoose.Schema({
    title: String,
    url: String,
    thumbnail: String,
    numComments: Number,
    score: Number,
    dateUtc: Date,
    permalink: String,
    id: String,
});

const Comment = mongoose.Schema({
    author: String,
    upvotes: Number,
    downvotes: Number,
    score: Number,
    body: String,
    // replies: []
});

Comment.add({ replies: [Comment] });

const Feed = db.model('Feed', mongoose.Schema({
    subreddit: String,
    channel: String,
    posts: [Post]
}, { collection: 'feeds' }));

const CommentTree = db.model('CommentTree', mongoose.Schema({
    postId: String,
    replies: [Comment]
}, { collection: 'comments' }));

exports.savePosts = (subreddit, channel, posts, cb)=>{
    Feed.findOneAndUpdate({
        subreddit: subreddit,
        channel: channel,
    },{
        subreddit: subreddit,
        channel: channel,
        posts: posts
    }, {
        upsert: true
    }, cb);
};

exports.saveComments = (postId, replies, cb)=>{
    CommentTree.findOneAndUpdate({
        postId: postId
    },{
        postId: postId,
        replies: replies.replies
    }, {
        upsert: true
    }, cb);
};

exports.getPosts = (subreddit, channel, cb)=>{
    Feed.findOne({subreddit: subreddit, channel: channel}).exec(cb);
};

exports.getComments = (postId, cb)=>{
    CommentTree.findOne({postId: postId}).exec(cb);
};