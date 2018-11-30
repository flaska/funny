import React from 'react';
import {RedditPost} from './redditPost.component';


export class RedditPostList extends React.Component {
    state = {posts: [{title: 'aaa'}]};
    render() {
        return (
            <div>
                {this.state.posts.map(post=><RedditPost postData={post}></RedditPost>)}
            </div>
        );
    }
}