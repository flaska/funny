let feeds = [
    {fullName: 'Funny', tag: 'funny', icon: 'md_sentiment_very_satisfied', defaultEnabled: true},
    {fullName: 'Aww', tag: 'aww', icon: 'fa_paw', defaultEnabled: true},
    {fullName: 'Mildly Interesting', tag: 'mildlyinteresting', icon: 'fa_surprise', defaultEnabled: true},

    {fullName: 'History', tag: 'history', icon: 'fa_clock', defaultEnabled: true},
    {fullName: 'Earth', tag: 'earth', icon: 'fa_globe-americas', defaultEnabled: true},

    {fullName: 'Comics', tag: 'comics', icon: 'fa_book-open', defaultEnabled: true},
    {fullName: 'Pics', tag: 'pics', icon: 'md_photo_camera', defaultEnabled: true},

    {fullName: 'Facepalm!', tag: 'facepalm', icon: 'fa_hand-paper', defaultEnabled: false},
    {fullName: 'Troll Chromosomes', tag: 'TrollXChromosomes', icon: 'fa_dna', defaultEnabled: false},
];

function reactFeed(jsonFeed){
    return {name: jsonFeed.fullName, url: `/api/reddit/feed?subreddit=${jsonFeed.tag}&channel=hot`, icon: jsonFeed.icon, enabled: jsonFeed.defaultEnabled, tag: jsonFeed.tag};
}

function nodeFeed(jsonFeed){
    return jsonFeed.tag;
}

exports.getReactFeeds = ()=>feeds.map(reactFeed);
exports.getNodeFeeds = ()=>feeds.map(nodeFeed);