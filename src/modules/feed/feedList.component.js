import React from 'react';
import axios from 'axios';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {FeedItem} from './feedItem.component';
import Button from '@material-ui/core/Button';

const styles = {
    main: {
      maxWidth: 760,
      margin: 'auto'
    },
    listItem: {
      display: 'block'
    },
    more: {
        margin: 'auto',
        display: 'block',
        marginBottom: 50
    }
};

export class FeedList extends React.Component {
    chunkSize = 10;
    state = {posts: []};
    loadMorePosts(){
        axios.get(this.props.feedUrl + `&from=${this.state.posts.length}&size=${this.chunkSize}`).then(response => {
            if (this.state.posts.length==0) this.setState(response.data);
            else {
                this.state.posts = this.state.posts.concat(response.data.posts);
                this.setState(this.state);
            }
        });
    }
    constructor(props){
        super(props);
        this.loadMorePosts();
    }
    render() {
        return (
            <div style={styles.main}>
                <List style={styles.list}>
                    {this.state.posts.map(post=>
                        <ListItem style={styles.listItem}>
                            <FeedItem postData={post}></FeedItem>
                        </ListItem>
                    )}
                </List>
                <Button style={styles.more} variant="contained" color="primary" onClick={()=>this.loadMorePosts()}>
                    More Fun
                </Button>
            </div>
        );
    }
}