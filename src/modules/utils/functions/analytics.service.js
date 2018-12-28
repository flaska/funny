window.analytics = {};
let A = window.analytics;


export default class Analytics {
    static setFeed(tag){
        A.feed = tag;
    }
}