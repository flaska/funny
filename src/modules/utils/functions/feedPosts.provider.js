export default class FeedPostsProvider {

    constructor(){
        let lastVisitDateString = localStorage.getItem('lastVisitDate');
        let date = new Date();
        localStorage.setItem('lastVisitDate',  date.toDateString());

        if (!lastVisitDateString) return this.currentChannel = 'topweek';
        let lastVisitDate = new Date(lastVisitDateString);
        let nowDate = new Date();
        let dateDiff = nowDate - lastVisitDate;
        let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

        if (days>4) return this.currentChannel = 'topweek';

        return this.currentChannel = 'hot';
    }

    fetchPosts(tag, from, size) {
        return fetch(`/api/reddit/feed?subreddit=${tag}&channel=${this.currentChannel}&from=${from}&size=${size}`).then(response => response.json()).then((data)=> {
            if (this.currentChannel != 'hot') data.posts.forEach(p => {
                delete p.dateUtc;
            });
            return data;
        });
    }
}