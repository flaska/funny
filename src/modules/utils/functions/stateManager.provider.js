import UrlParser from './urlParser.provider'
import FeedsPostsProvider from './feedPosts.provider'

export default class StateManager{
    feed = {tag: 'funny', channel: 'hot', posts: []};
    setState;

    constructor(setState){
        this.setState = setState;
        let tag = UrlParser.getFeedTagFromUrl();
        let channel = UrlParser.getChannelFromUrl();
        if (tag) this.feed.tag = tag;
        if (channel) this.feed.channel = channel;
        setTimeout(()=>this.loadMorePosts(), 0);
    }

    loadMorePosts(){
        this.setState({loading: true});
        FeedsPostsProvider.fetchPosts(this.feed.tag, this.feed.channel, this.feed.posts.length, 10).then(response => {
            this.feed.posts = this.feed.posts.concat(response.posts);
            this.setState({loading: false, feed: response})
        }).catch((error)=>{
            this.setState({loading: false, offline: true});
        });
    }
}