import LocalStorage from "./localStorage.service";
const getDefaultFeeds = require('../../../shared/redditFeeds').getReactFeeds;

export default class FeedsCacheProvider {
    static getAllFeeds(){
        let localStorageFeeds2 = LocalStorage.getData('redditFeeds_v2');
        if (localStorageFeeds2) {
            let allFeeds = getDefaultFeeds();
            allFeeds.forEach(f=>{
                if (localStorageFeeds2.indexOf(f.tag)!==-1) f.enabled = true;
                else f.enabled = false;
            });
            return allFeeds;
        }
        return getDefaultFeeds();
    }

    static saveSelectedFeeds(feeds){
        let toStore = feeds.filter(f=>f.enabled).map(f=>f.tag);
        LocalStorage.saveData('redditFeeds_v2', toStore);
    }

    static getEnabledFeeds() {
        return this.getAllFeeds().filter(f=>f.enabled);
    }

    static getDefaultFeed(){
        return this.getEnabledFeeds()[0];
    }

    static getFeedByName(feedName){
        return this.getEnabledFeeds().filter(f=>f.tag===feedName)[0];
    }
}