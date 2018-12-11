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
    state = {posts: []};
    constructor(props){
        super(props);
        axios.get(this.props.feedUrl).then(response => {
            this.setState(response.data);
        });
    }
    render() {
        return (
                <List style={styles.list}>
                    {this.state.posts.map(post=>
                        <ListItem style={styles.listItem}>
                            <FeedItem postData={post}></FeedItem>
                        </ListItem>
                    )}
                </List>
        );
    }
}