export default class UrlParser {
    static getFeedTagFromUrl(){
        let tag = window.location.pathname.replace('/f/','');
        if (tag=='/') tag = 'funny';
        return tag;
    }
    static getChannelFromUrl(){
        return 'hot';
    }
}