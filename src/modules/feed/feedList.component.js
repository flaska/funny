import React from 'react';
import axios from 'axios';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import {FeedItem} from './feedItem.component';

export class FeedList extends React.Component {
    state = {posts: []};
    constructor(props){
        super(props);
        axios.get(this.props.feedUrl).then(response => {
            this.setState({posts: response.data});
        });
    }
    render() {
        return (
                <List>
                    {this.state.posts.map(post=>
                        <ListItem>
                            <FeedItem postData={post}></FeedItem>
                        </ListItem>
                    )}
                </List>
        );
    }
}