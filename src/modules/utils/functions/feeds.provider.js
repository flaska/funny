import {getData, saveData} from "./localStorage.service";
const getDefaultFeeds = require('../../../shared/redditFeeds').getReactFeeds;

export function getAllFeeds(){
   let localStorageFeeds2 = getData('redditFeeds_v2');
    if (localStorageFeeds2) {
        let allFeeds = getDefaultFeeds();
        allFeeds.forEach(f=>{
            if (localStorageFeeds2.indexOf(f.tag)!=-1) f.enabled = true;
            else f.enabled = false;
        });
        return allFeeds;
    }
    return getDefaultFeeds();
}

export function saveSelectedFeeds(feeds){
    let toStore = feeds.filter(f=>f.enabled).map(f=>f.tag);
    saveData('redditFeeds_v2', toStore);
}

export function getEnabledFeeds() {
    return getAllFeeds().filter(f=>f.enabled);
}

export function getDefaultFeed(){
    return getEnabledFeeds()[0];
}

export function getFeedByName(feedName){
    return getEnabledFeeds().filter(f=>f.tag===feedName)[0];
}