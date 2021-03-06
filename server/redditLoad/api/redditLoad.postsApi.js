const request = require('request'),
    redditLoadDb = require('../redditLoad.db'),
    config = require('config')
;


function makeUrl(subreddit, channel) {
    let subredditTag = subreddit;
    if (process.env.heroku==='true') {
        console.log('\n\nProduction Load\n\n');
        if (subredditTag === 'earth' || subredditTag === 'history') {
            subredditTag += 'po';
            if (!!subreddit) subredditTag += 'rn';
        }
    } else {
        if (subreddit==='earth') return false;
        if (subreddit==='history') return false;
    }

    let t, redditChannel;
    if (channel.indexOf('top')>-1) {
        if (channel==='topweek') t = 'week';
        if (channel==='topmonth') t = 'month';
        redditChannel = 'top';
    } else redditChannel = channel;

    let requestUrl = `https://www.reddit.com/r/${subredditTag}/${redditChannel}.json?limit=${config.modules.redditLoad.numPosts}`;
    if (t) requestUrl += '&t=' + t;
    return requestUrl;
}

exports.fetchPosts = (subreddit, channel, cb)=>{

    let requestUrl = makeUrl(subreddit, channel);
    if (!requestUrl) return false;
    request(requestUrl, function (error, response, body) {
        let result = [];
        if (!JSON.parse(body).data) return console.error(`Cannot fetch posts for ${subreddit}`);
        JSON.parse(body).data.children
            .filter(redditPost=>!redditPost.data.distinguished)
            .filter(redditPost=>redditPost.data.post_hint=='image' || redditPost.data.post_hint=='hosted:video')
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
                if (jsonPost.type === 'hosted:video') jsonPost.url = rPost.media.reddit_video.fallback_url;
                result.push(jsonPost);
            });
        redditLoadDb.savePosts(subreddit, channel, result, cb);
    });
};