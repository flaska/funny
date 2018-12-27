import {getData, saveData} from "./localStorage.service";
const defaultFeeds = require('../../../shared/redditFeeds').reactFeeds;

export function getAllFeedsFromStorage(){
    let localStorageFeeds = getData('redditFeeds_v1');
    if (localStorageFeeds) return localStorageFeeds;
    return defaultFeeds;
}

export function saveSelectedFeeds(feeds){
    saveData('redditFeeds_v1', feeds);
}

export function getEnabledFeeds() {
    return getAllFeedsFromStorage().filter(f=>f.enabled);
}

export function getDefaultFeed(){
    return getEnabledFeeds()[0];
}