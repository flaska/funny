export default class UrlParser {
    static getSubredditFromUrl(){
        let result = window.location.pathname.replace('/f/','');
        return result.replace(/\/.+$/, '');

    }
    static getChannelFromUrl(){
        if ((window.location.pathname.match(/\//g) || []).length!==3) return;
        return window.location.pathname.replace(/\/f\/.+\//,'');
    }
}