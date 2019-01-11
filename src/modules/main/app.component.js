import React from "react";
import Main from "./main.component";
import FeedsPostsProvider from "../utils/functions/feedPosts.provider";
import UrlParser from "../utils/functions/urlParser.provider";

export default class App extends React.Component {
    state = {feed: {posts: []}};
    constructor(props){
        super(props);
        setTimeout(()=>this.init(),0);
    }

    init(){
        let subreddit = UrlParser.getSubredditFromUrl();
        let channel = UrlParser.getChannelFromUrl();
        this.setNewFeed(subreddit || 'funny', channel || 'hot');
    }

    setNewFeed(subreddit, channel){
        this.setState({feed: {subreddit: subreddit, channel: channel, posts: []}});
        this.loadMorePosts();
    }

    loadMorePosts(){
        this.setState({loading: true});
        FeedsPostsProvider.fetchPosts(this.state.feed.subreddit, this.state.feed.channel, this.state.feed.posts.length, 10).then(response => {
            response.posts = this.state.feed.posts.concat(response.posts);
            this.setState({loading: false, feed: response})
        }).catch((error)=>{
            this.setState({loading: false, offline: true});
        });
    }

    render(){
        return (
                <Main state={this.state} loadMorePosts={()=>this.loadMorePosts()} setSource={()=>this.init()}/>
        );
    }
}