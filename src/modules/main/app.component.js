import React from "react";
import Main from "./main.component";
import FeedsPostsProvider from "../utils/functions/feedPosts.provider";
import UrlParser from "../utils/functions/urlParser.provider";
import {BrowserRouter as Router} from "react-router-dom";
import {getReactFeeds} from '../../shared/redditFeeds';


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
        let fullName = getReactFeeds().filter(f=>f.tag===subreddit)[0].name;
        this.setState({feed: {subreddit: subreddit, channel: channel, posts: [], fullName: fullName}});
        setTimeout(()=> this.loadMorePosts(), 0);
    }

    loadMorePosts(){
        this.setState({loading: true});
        FeedsPostsProvider.fetchPosts(this.state.feed.subreddit, this.state.feed.channel, this.state.feed.posts.length, 10).then(response => {
            let fullName = getReactFeeds().filter(f=>f.tag===this.state.feed.subreddit)[0].name;
            response.posts = this.state.feed.posts.concat(response.posts);
            response.fullName = fullName;
            this.setState({loading: false, feed: response})
        }).catch((error)=>{
            this.setState({loading: false, offline: true});
        });
    }

    render(){
        return (
            <Router>
                <Main state={this.state} loadMorePosts={()=>this.loadMorePosts()} setSource={()=>setTimeout(()=>this.init(),0)} setChannel={(newChannel)=>this.setNewFeed(this.state.feed.subreddit, newChannel)}/>
            </Router>
        );
    }
}