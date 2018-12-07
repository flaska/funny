import React from 'react';
import 'typeface-roboto';
import {FeedList} from "../feed/feedList.component";

export class Main extends React.Component {
    render() {
        return (
            <FeedList feedUrl={'/api/reddit/feed?subreddit=funny&channel=hot'}></FeedList>
        );
    }
}