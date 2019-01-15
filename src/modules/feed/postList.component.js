import React from 'react';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Post from './post.component';

const styles = {
    main: {
      // maxWidth: 760,
      // margin: 'auto'
    },
    listItem: {
      display: 'block'
    }
};

export default function PostList (props) {
    return (
        <div style={styles.main}>
            <List style={styles.list} id='feedList'>
                {props.posts.map(post=>
                    <ListItem style={styles.listItem} key={post.id}>
                        <Post postData={post}></Post>
                    </ListItem>
                )}
            </List>
        </div>
    );
}