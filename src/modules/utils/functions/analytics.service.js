window.analytics = {};
let A = window.analytics;


export default class Analytics {
    static setFeed(tag){
        A.feed = tag;
    }

    static triggerSwitchFeed(tag){
        window.dataLayer.push({'event': 'switchFeedCustom', 'switchFeedTarget': tag});
    }
}