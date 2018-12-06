import React from 'react';
import axios from 'axios';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {RedditPost} from './redditPost.component';

export class RedditPostList extends React.Component {
    state = {posts: []};
    constructor(props){
        super(props);
        axios.get('/api/redditFunny/getHot').then(response => {
            this.setState({posts: response.data});
        });
    }
    render() {
        return (
                <List>
                    {this.state.posts.map(post=>
                        <ListItem>
                            <RedditPost postData={post}></RedditPost>
                        </ListItem>
                    )}
                </List>
        );
    }
}