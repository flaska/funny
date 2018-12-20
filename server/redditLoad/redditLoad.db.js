const redditDb = require('../lib/db/redditLib.db');

exports.savePosts = (subreddit, channel, posts, cb)=>{
    redditDb.Feed.findOneAndUpdate({
        subreddit: subreddit,
        channel: channel,
    },{
        subreddit: subreddit,
        channel: channel,
        posts: posts
    }, {
        upsert: true
    }).lean().exec(cb);
};

exports.saveComments = (subreddit, postId, replies, cb)=>{
    redditDb.CommentTree.findOneAndUpdate({
        subreddit: subreddit,
        postId: postId
    },{
        subreddit: subreddit,
        postId: postId,
        replies: replies.replies
    }, {
        upsert: true
    }, cb);
};

exports.deleteComments = (subreddit, cb)=>{
    redditDb.CommentTree.remove({subreddit: subreddit}).exec(cb);
};