import React from 'react';
import {RedditPost} from './redditPost.component';
import axios from 'axios';

export class RedditPostList extends React.Component {
    state = {posts: [{title: 'aaa'}]};
    constructor(props){
        super(props);
        axios.get('/api/redditFunny/getHot').then(response => {
            console.log(response);
            this.state.posts = response;
        })
    }
    render() {
        return (
            <div>
                {this.state.posts.map(post=><RedditPost postData={post}></RedditPost>)}
            </div>
        );
    }
}