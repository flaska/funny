import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Post from './post.component';
import AmazonAd from '../utils/components/amazonAd.component';

const styles = {
    listItem: {
      display: 'block'
    }
};

export default function PostList (props) {
    return (
        <List style={styles.list} id='feedList'>
            {props.posts.map((post, i)=> {
                if (i==5) return <AmazonAd key={i}/>;
                return (
                    <ListItem style={styles.listItem} key={post.id}>
                        <Post postData={post}></Post>
                    </ListItem>
                );
            })}
        </List>
    );
}