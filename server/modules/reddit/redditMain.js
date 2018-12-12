const preloadApi = require('./preload/redditPreloadApi'),
    routes = require('./deliver/redditRoutes');

function preloadFeed(subreddit, channel){
    preloadApi.fetchPosts(subreddit, channel, (err, result)=>{
        if (err) console.log(err);
        else console.log(`Posts fetched and saved for ${subreddit} / ${channel}`);

        if (!Array.isArray(result.posts)) return console.log(JSON.stringify(result));
        result.posts.forEach((post)=>{
            preloadApi.fetchComments(post.id, (err, result)=>{
                if (err) console.log(err);
                else console.log(`Comments fetched and saved for ${post.id} / ${post.title}`);
            });
        });
    });

}

exports.init = (app)=>{
    app.use('/api/reddit', routes);
    preloadFeed('funny', 'hot');
    preloadFeed('pics', 'hot');
    setInterval(()=>{
        preloadFeed('funny', 'hot');
        preloadFeed('pics', 'hot');
    }, 15 * 60 * 1000);
};
