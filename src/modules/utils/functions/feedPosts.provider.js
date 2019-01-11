export default class FeedPostsProvider {
    static fetchPosts(tag, channel, from, size) {
        return fetch(`/api/reddit/feed?subreddit=${tag}&channel=${channel}&from=${from}&size=${size}`).then(response => response.json());
    }
}