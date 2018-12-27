const feeds = [
    {fullName: 'Funny', tag: 'funny', icon: 'md_sentiment_very_satisfied'},
    {fullName: 'Aww', tag: 'aww', icon: 'fa_paw'},
    {fullName: 'Pics', tag: 'pics', icon: 'md_photo_camera'},
    {fullName: 'Videos', tag: 'videos', icon: 'fa_video'},
    {fullName: 'Movies', tag: 'movies', icon: 'fa_film'},
    {fullName: 'World News', tag: 'worldnews', icon: 'fa_globe_americas'},
    {fullName: 'Science', tag: 'science', icon: 'fa_flask'},
    {fullName: 'Gaming', tag: 'gaming', icon: 'fa_gamepad'},
    {fullName: 'Today I Learned...', tag: 'todayilearned', icon: 'fa_lightbulb'},    
];

function reactFeed(jsonFeed){
    return {name: jsonFeed.fullName, url: `/api/reddit/feed?subreddit=${jsonFeed.tag}&channel=hot`, icon: jsonFeed.icon};
}

function nodeFeed(jsonFeed){
    return jsonFeed.tag;
}

exports.reactFeeds = feeds.map(reactFeed);
exports.nodeFeeds = feeds.map(nodeFeed);