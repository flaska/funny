export default class FeedPostsProvider {
    static fetchPosts(tag, channel, from, size) {
        return fetch(`/api/reddit/feed?subreddit=${tag}&channel=${channel}&from=${from}&size=${size}`).then(response => response.json()).then((data)=> {
            if (this.currentChannel != 'hot') data.posts.forEach(p => {
                delete p.dateUtc;
            });
            return data;
        });
    }
}