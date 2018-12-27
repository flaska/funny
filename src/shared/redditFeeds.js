const feeds = [
    {fullName: 'Funny', tag: 'funny', icon: 'md_sentiment_very_satisfied', defaultEnabled: true},
    {fullName: 'Aww', tag: 'aww', icon: 'fa_paw', defaultEnabled: true},
    {fullName: 'Pics', tag: 'pics', icon: 'md_photo_camera', defaultEnabled: true},
    {fullName: 'Videos', tag: 'videos', icon: 'fa_video', defaultEnabled: true},
    {fullName: 'Movies', tag: 'movies', icon: 'fa_film', defaultEnabled: true},
    {fullName: 'Gaming', tag: 'gaming', icon: 'fa_gamepad', defaultEnabled: true},
    {fullName: 'Science', tag: 'science', icon: 'fa_flask', defaultEnabled: false},
    {fullName: 'World News', tag: 'worldnews', icon: 'fa_globe_americas', defaultEnabled: false},
    {fullName: 'Today I Learned...', tag: 'todayilearned', icon: 'fa_lightbulb', defaultEnabled: false},
];

function reactFeed(jsonFeed){
    return {name: jsonFeed.fullName, url: `/api/reddit/feed?subreddit=${jsonFeed.tag}&channel=hot`, icon: jsonFeed.icon, enabled: jsonFeed.defaultEnabled, tag: jsonFeed.tag};
}

function nodeFeed(jsonFeed){
    return jsonFeed.tag;
}

exports.reactFeeds = feeds.map(reactFeed);
exports.nodeFeeds = feeds.map(nodeFeed);