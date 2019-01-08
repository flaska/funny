import LocalStorage from './localStorage.service';

export default class FeedPostsProvider {

    

    static fetchPosts(tag, from, size) {
        return fetch(`/api/reddit/feed?subreddit=${tag}&channel=hot&from=${from}&size=${size}`).then(response => response.json());
    }
}