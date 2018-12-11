import React from 'react';
import axios from 'axios';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {FeedItem} from './feedItem.component';

const styles = {
  list: {
      maxWidth: 760,
      margin: 'auto'
  },
  listItem: {
      display: 'block'
  }
};

export class FeedList extends React.Component {
    state = {posts: [], chunkSize: 10};
    loadMorePosts(){
        axios.get(this.props.feedUrl + `&from=${this.state.posts.length}&size=${this.state.chunkSize}`).then(response => {
            // this.state.posts = this.state.posts.concat(response.posts);
            // this.state = response;
            this.setState(response);
        });
    }
    constructor(props){
        super(props);
        // this.loadMorePosts();

        axios.get(this.props.feedUrl + `&from=${this.state.posts.length}&size=${this.state.chunkSize}`).then(response => {
            // this.state.posts = this.state.posts.concat(response.posts);
            // this.state = response;
            this.setState(response);
        });
    }
    render() {
        return (
                <List style={styles.list}>
                    xxx
                    {this.state.posts.map(post=>
                        <ListItem style={styles.listItem}>
                            <FeedItem postData={post}></FeedItem>
                        </ListItem>
                    )}
                </List>
        );
    }
}