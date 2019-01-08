process.on('uncaughtException', function (err) {
    console.error(err);
});

const redditLoadLogic = require('./redditLoad.logic'),
feeds = require('../../src/shared/redditFeeds').getNodeFeeds();

redditLoadLogic.loadFeeds(feeds);
setInterval(()=>{
    redditLoadLogic.loadFeeds(feeds);
}, 60 * 60 * 1000);