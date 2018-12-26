const request = require('request'),
    redditLoadDb = require('../redditLoad.db'),
    openGraph = require('./utils/redditLoad.openGraph.js')
;

exports.fetchPosts = (subreddit, channel, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/' + channel + '.json?limit=100', function (error, response, body) {
        let promises = [];
        let result = [];
        if (!JSON.parse(body).data) return console.error(`Cannot fetch posts for ${subreddit}`);
        JSON.parse(body).data.children
            .filter(redditPost=>!redditPost.data.distinguished)
            .filter(redditPost=>!redditPost.data.over_18)
            .forEach((redditPost)=>{
                let rPost = redditPost.data;
                let jsonPost = {
                    title: rPost.title,
                    thumbnail : rPost.thumbnail,
                    numComments: rPost.num_comments,
                    score: rPost.score,
                    dateUtc: new Date(rPost.created_utc * 1000),
                    permalink: rPost.permalink,
                    id: rPost.id,
                    type: rPost.post_hint,
                    url: rPost.url
                };
                if (!jsonPost.type) jsonPost.type = 'link';
                if (jsonPost.type === 'rich:video') jsonPost.type = 'link';
                if (!jsonPost.thumbnail.indexOf('http')==0) jsonPost.thumbnail = null;
                if (jsonPost.type === 'hosted:video') jsonPost.url = rPost.media.reddit_video.fallback_url;

                if (!jsonPost.thumbnail) {
                    let p = openGraph.getImage(jsonPost.url);
                    promises.push(p);
                    p.then((imgUrl) => {
                        jsonPost.thumbnail = imgUrl;
                    });
                }
                result.push(jsonPost);
            });
        Promise.all(promises).then(()=>{
            redditLoadDb.savePosts(subreddit, channel, result, cb);
        });
    });
};