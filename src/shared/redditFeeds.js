const feeds = [
    {fullName: 'Funny', tag: 'funny', icon: 'md_sentiment_very_satisfied', defaultEnabled: true, category: 'LOL'},
    {fullName: 'Facepalm!', tag: 'facepalm', icon: 'fa-hand-paper', defaultEnabled: true, category: 'LOL'},
    {fullName: 'Comics', tag: 'comics', icon: 'fa-book-open', defaultEnabled: true, category: 'LOL'},
    {fullName: 'Troll Chromosomes', tag: 'TrollXChromosomes', icon: 'fa-dna', defaultEnabled: true, category: 'LOL'},
    {fullName: 'Aww', tag: 'aww', icon: 'fa_paw', defaultEnabled: true, category: 'LOL'},
    {fullName: 'Pics', tag: 'pics', icon: 'md_photo_camera', defaultEnabled: true, category: 'LOL'},

    // {fullName: 'Jokes', tag: 'jokes', icon: 'md_photo_camera', defaultEnabled: true},

    {fullName: 'Videos', tag: 'videos', icon: 'fa_video', defaultEnabled: false},
    {fullName: 'Movies', tag: 'movies', icon: 'fa_film', defaultEnabled: false},
    {fullName: 'Gaming', tag: 'gaming', icon: 'fa_gamepad', defaultEnabled: false},

    {fullName: 'Science', tag: 'science', icon: 'fa_flask', defaultEnabled: false, category: 'LOL'},
    {fullName: 'World News', tag: 'worldnews', icon: 'fa_globe_americas', defaultEnabled: false, category: 'LOL'},
    {fullName: 'Today I Learned...', tag: 'todayilearned', icon: 'fa_lightbulb', defaultEnabled: false, category: 'LOL'},
];

function reactFeed(jsonFeed){
    return {name: jsonFeed.fullName, url: `/api/reddit/feed?subreddit=${jsonFeed.tag}&channel=hot`, icon: jsonFeed.icon, enabled: jsonFeed.defaultEnabled, tag: jsonFeed.tag};
}

function nodeFeed(jsonFeed){
    return jsonFeed.tag;
}

exports.getReactFeeds = ()=>feeds.map(reactFeed);
exports.getNodeFeeds = ()=>feeds.map(nodeFeed);