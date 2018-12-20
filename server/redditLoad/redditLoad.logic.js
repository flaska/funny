const redditLoadApi = require('./redditLoad.api');

function loadFeed(subreddit, channel){
    redditLoadApi.deleteComments(subreddit, (err)=>{
        if (err) return console.error(err);
        // console.debug(`Deleted comments for ${subreddit}`);
    });
    redditLoadApi.fetchPosts(subreddit, channel, (err, result)=>{
        if (err) console.error(err);
        else if (!result) throw `Cannot fetch posts for ${subreddit}`;
        // else console.debug(`Posts fetched and saved for ${subreddit} / ${channel}`);
        if (!Array.isArray(result.posts)) return console.error('Cannot parse posts' + JSON.stringify(result));
        result.posts.forEach((post)=>{
            redditLoadApi.fetchComments(subreddit, post.id, (err, result)=>{
                if (err) console.error(err);
                // else console.debug(`Comments fetched and saved for ${post.id} / ${post.title}`);
            });
        });
    });

}

exports.loadFeeds = function(feeds){
    feeds.forEach(f=>{
        loadFeed(f, 'hot');
    });
};
