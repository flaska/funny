const redditLoadPostsApi = require('./api/redditLoad.postsApi'),
    redditLoadCommentsApi = require('./api/redditLoad.commentsApi');

function loadFeed(subreddit, channel){
    redditLoadCommentsApi.deleteComments(subreddit, (err)=>{
        if (err) return console.error(err);
    });
    redditLoadPostsApi.fetchPosts(subreddit, channel, (err, result)=>{
        if (err) console.error(err);
        else if (!result) throw `Cannot fetch posts for ${subreddit}`;
        if (!Array.isArray(result.posts)) return console.error('Cannot parse posts' + JSON.stringify(result));
        result.posts.forEach((post)=>{
            redditLoadCommentsApi.fetchComments(subreddit, post.id, (err, result)=>{
                if (err) console.error(err);
            });
        });
    });

}

exports.loadFeeds = function(feeds){
    feeds.forEach(f=>{
        loadFeed(f, 'hot');
    });
};
