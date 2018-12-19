const request = require('request'),
    redditDb = require('../db/redditDb')
;

exports.fetchPosts = (subreddit, channel, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/' + channel + '.json?limit=100', function (error, response, body) {
        let result = [];
        if (!JSON.parse(body).data) console.error(`Cannot fetch posts for ${subreddit}`);
        JSON.parse(body).data.children
            .filter(redditPost=>!redditPost.data.distinguished)
            .filter(redditPost=>!redditPost.data.over_18)
            .forEach((redditPost)=>{
                let rPost = redditPost.data;
                try {
                    let jsonPost = {
                        title: rPost.title,
                        thumbnail : rPost.thumbnail,
                        numComments: rPost.num_comments,
                        score: rPost.score,
                        dateUtc: new Date(rPost.created_utc * 1000),
                        permalink: rPost.permalink,
                        id: rPost.id,
                        type: rPost.post_hint
                    };

                    switch(jsonPost.type) {
                        case 'image': jsonPost.url = rPost.url; break;
                        case 'hosted:video': jsonPost.url = rPost.media.reddit_video.fallback_url; break;
                        case 'rich:video': jsonPost.url = rPost.url; break;
                        case 'link':  {
                            if (rPost.preview.reddit_video_preview) jsonPost.url = rPost.preview.reddit_video_preview.fallback_url;
                            else jsonPost.url = rPost.url;
                            break;
                        }
                        default: jsonPost.url = rPost.url;
                    }

                    result.push(jsonPost);
                }catch (e) {
                    console.log(JSON.stringify(rPost));
                    throw e;
                }


            });
        redditDb.savePosts(subreddit, channel, result, cb);
    });
};

function getReplies(redditComment, replies, level){
    if (redditComment.data.score<50) return false;
    let l = level + 1;
    let comment = {
        author: redditComment.data.author,
        upvotes: redditComment.data.ups,
        downvotes: redditComment.data.ups,
        score: redditComment.data.score,
        body: redditComment.data.body,
        replies: []
    };
    replies.push(comment);
    if (l>=3) return false;
    if (redditComment.data.replies && redditComment.data.replies.data) redditComment.data.replies.data.children.slice(0,2).forEach((c)=>{getReplies(c, comment.replies, l)});
}

exports.fetchComments = (subreddit, postId, cb)=>{
    request('https://www.reddit.com/r/' + subreddit + '/comments/' +postId + '.json?sort=top', function (error, response, body) {
        if (!JSON.parse(body)[1] || !JSON.parse(body)[1].data) return;
        let result = {replies: []};
        JSON.parse(body)[1].data.children.slice(0,2).forEach((c)=>{getReplies(c, result.replies, 0)});
        redditDb.saveComments(subreddit, postId, result, cb);
    });
};

exports.deleteComments = (subreddit, cb)=>{
    redditDb.deleteComments(subreddit, cb);
};