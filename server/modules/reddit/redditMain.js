const preloadApi = require('./preload/redditPreloadApi'),
    routes = require('./deliver/redditRoutes');

function preloadFeed(subreddit, channel){
    preloadApi.deleteComments(subreddit, (err)=>{
        if (err) return console.error(err);
        console.debug(`Deleted comments for ${subreddit}`);
    });
    preloadApi.fetchPosts(subreddit, channel, (err, result)=>{
        if (err) console.error(err);
        else console.debug(`Posts fetched and saved for ${subreddit} / ${channel}`);
        if (!Array.isArray(result.posts)) return console.error('Cannot parse posts' + JSON.stringify(result));
        result.posts.forEach((post)=>{
            preloadApi.fetchComments(subreddit, post.id, (err, result)=>{
                if (err) console.error(err);
                else console.debug(`Comments fetched and saved for ${post.id} / ${post.title}`);
            });
        });
    });

}

const feeds = ['funny', 'pics', 'aww'];

exports.init = (app)=>{
    app.use('/api/reddit', routes);
    feeds.forEach(f=>{
        preloadFeed(f, 'hot');
    });
    setInterval(()=>{
        feeds.forEach(f=>{
            preloadFeed(f, 'hot');
        });
    }, 15 * 60 * 1000);
};
