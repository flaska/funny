const redditLoadLogic = require('./redditLoad.logic');


const feeds = ['funny', 'pics', 'aww', 'science', 'worldnews', 'gaming','todayilearned','videos','movies'];

redditLoadLogic.loadFeeds(feeds);
setInterval(()=>{
    redditLoadLogic.loadFeeds(feeds);
}, 15 * 60 * 1000);