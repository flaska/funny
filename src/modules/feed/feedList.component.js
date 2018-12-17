import React from 'react';
import axios from 'axios';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {FeedItem} from './feedItem.component';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";

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
    },
    loading: {
        textAlign: 'center'
    }
};

export class FeedList extends React.Component {
    chunkSize = 10;
    state = {posts: [], loading: true};
    loadMorePosts(){
        this.setState({loading: true});
        axios.get(this.props.feed.url + `&from=${this.state.posts.length}&size=${this.chunkSize}`).then(response => {
            this.setState({loading: false});
            if (this.state.posts.length==0) this.setState(response.data);
            else {
                this.setState({posts: this.state.posts.concat(response.data.posts)});
            }
        });
    }
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.loadMorePosts();
    }

    componentWillReceiveProps(props) {
        this.setState({posts: []});
        setTimeout(()=>{this.loadMorePosts()},0);
    }

    showLoading(){
        if (this.state.loading) return (
            <React.Fragment>
                <br/>
                <LinearProgress />
                <br/>
                <Typography color="primary" style={styles.loading}>Loading...</Typography>
                <br/>
            </React.Fragment>
        );
        else return (
            <Button style={styles.more} variant="contained" color="primary" onClick={()=>this.loadMorePosts()}>
                More Fun
            </Button>
        );
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

                {this.showLoading()}

            </div>
        );
    }
}