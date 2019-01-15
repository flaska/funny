const redditLoadPostsApi = require('./api/redditLoad.postsApi'),
    redditLoadCommentsApi = require('./api/redditLoad.commentsApi');

function loadFeed(subreddit, channel){
    redditLoadCommentsApi.deleteComments(subreddit, channel, (err)=>{
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
    console.log('Fetching data for hot');
    feeds.forEach(f=>{
        loadFeed(f, 'hot');
    });

    setTimeout(()=>{
        console.log('Fetching data for topweek');
        feeds.forEach(f=>{
            loadFeed(f, 'topweek');
        });
    }, 1000 * 60 * 0.5);
    setTimeout(()=>{
        console.log('Fetching data for topmonth');
        feeds.forEach(f=>{
            loadFeed(f, 'topmonth');
        });
    }, 1000 * 60 * 1);
};
