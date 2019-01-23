window.analytics = {};
let A = window.analytics;

/*global fbq*/

export default class Analytics {
    static setFeed(tag){
        A.feed = tag;
    }

    static triggerSwitchFeed(tag){
        window.dataLayer.push({'event': 'switchFeedCustom', 'switchFeedTarget': tag});
    }

    static fbViewContent(){
        try {
            if(fbq) fbq('track', 'ViewContent');
        } catch (e){
            console.error(e);
        }
    }
}