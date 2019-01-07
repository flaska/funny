import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Post} from './post.component';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from "@material-ui/core/Typography";
import {Offline} from "../utils/components/offline.component";

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
    state = {posts: [], loading: true, offline: false};

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props) {
        if (this.props.feed.url === props.feed.url) return;
        this.setState({posts: []});
        setTimeout(()=>{this.loadMorePosts()},0);
    }

    componentDidMount(){
        this.loadMorePosts();
    }

    loadMorePosts(){
        this.setState({loading: true});
        fetch(this.props.feed.url + `&from=${this.state.posts.length}&size=${this.chunkSize}`).then(response => response.json()).then(response => {
            this.setState({loading: false});
            if (this.state.posts.length==0) this.setState(response);
            else {
                this.setState({posts: this.state.posts.concat(response.posts)});
            }
        }).catch((error)=>{
            this.setState({offline: true, loading: false});
        });
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
        if (this.state.offline) return <Offline/>;
        if (this.state.posts.length<100)return (
            <Button style={styles.more} variant="contained" color="primary" onClick={()=>this.loadMorePosts()}>
                More Fun
            </Button>
        );
    }

    render() {
        return (
            <div style={styles.main}>
                <List style={styles.list} id='feedList'>
                    {this.state.posts.map(post=>
                        <ListItem style={styles.listItem} key={post.id}>
                            <Post postData={post}></Post>
                        </ListItem>
                    )}
                </List>
                {this.showLoading()}
            </div>
        );
    }
}