import React from 'react';
import 'typeface-roboto';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';

export class Main extends React.Component {
    componentDidMount(){
        document.title = "Slacker"
    }
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <SlackerAppBar></SlackerAppBar>
                <FeedList feedUrl={'/api/reddit/feed?subreddit=funny&channel=hot'}></FeedList>
            </React.Fragment>
        );
    }
}