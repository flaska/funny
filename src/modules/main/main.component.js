import React from 'react';
import MetaTags from 'react-meta-tags';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    },
});

const FeedOptions = [
    {name: '/r/Funny', url: '/api/reddit/feed?subreddit=funny&channel=hot'},
    {name: '/r/Pics', url: '/api/reddit/feed?subreddit=pics&channel=hot'},
    {name: '/r/Aww', url: '/api/reddit/feed?subreddit=aww&channel=hot'}
];

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {feed: FeedOptions[0]};
    }
    handleClick(e){
        this.setState({feed: e});
    }
    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                </MetaTags>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <SlackerAppBar feedOptions={FeedOptions} onClick={(e)=>this.handleClick(e)}></SlackerAppBar>
                    <FeedList feed={this.state.feed}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}