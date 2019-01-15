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
    }).lean().exec((err)=>{
        if (err) throw err;
        redditDb.Feed.findOne({
            subreddit: subreddit,
            channel: channel,
        }).exec(cb);
    });
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

exports.deleteComments = (subreddit, channel, cb)=>{
    redditDb.CommentTree.remove({subreddit: subreddit, channel: channel}).exec(cb);
};