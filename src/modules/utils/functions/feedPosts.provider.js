export default class FeedPostsProvider {

    static getChannel(){
        let lastVisitDateString = localStorage.getItem('lastVisitDate');
        let date = new Date();
        localStorage.setItem('lastVisitDate',  date.toDateString());

        if (!lastVisitDateString) return 'topmonth';
        let lastVisitDate = new Date(lastVisitDateString);
        let nowDate = new Date();
        let dateDiff = nowDate - lastVisitDate;
        let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

        if (days>15) return 'topmonth';
        if (days>4) return 'topweek';

        return 'hot';
    }

    static fetchPosts(tag, from, size) {
        let channel = this.getChannel();
        return fetch(`/api/reddit/feed?subreddit=${tag}&channel=${channel}&from=${from}&size=${size}`).then(response => response.json());
    }
}