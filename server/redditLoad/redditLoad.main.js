const redditLoadLogic = require('./redditLoad.logic'),
feeds = require('../../src/shared/redditFeeds').nodeFeeds;

redditLoadLogic.loadFeeds(feeds);
setInterval(()=>{
    redditLoadLogic.loadFeeds(feeds);
}, 15 * 60 * 1000);