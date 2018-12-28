const request = require('request'),
    redditLoadDb = require('../redditLoad.db')
;

exports.fetchPosts = (subreddit, channel, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/' + channel + '.json?limit=100', function (error, response, body) {
        let result = [];
        if (!JSON.parse(body).data) return console.error(`Cannot fetch posts for ${subreddit}`);
        JSON.parse(body).data.children
            .filter(redditPost=>!redditPost.data.distinguished)
            .filter(redditPost=>!redditPost.data.over_18)
            .filter(redditPost=>!redditPost.data.is_self)
            .filter(redditPost=>redditPost.data.thumbnail && redditPost.data.thumbnail.indexOf('http')==0)
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
                jsonPost.title = jsonPost.title.replace(new RegExp('p'+'orn','g'), '');
                if (!jsonPost.type) jsonPost.type = 'link';
                if (jsonPost.type === 'rich:video') jsonPost.type = 'link';
                if (jsonPost.type === 'hosted:video') jsonPost.url = rPost.media.reddit_video.fallback_url;
                result.push(jsonPost);
            });
        redditLoadDb.savePosts(subreddit, channel, result, cb);
    });
};