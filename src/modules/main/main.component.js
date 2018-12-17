import React from 'react';
import MetaTags from 'react-meta-tags';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import {LeftMenu} from "./leftMenu.component";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        error: red,
        contrastThreshold: 3,
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
        this.state = {feed: FeedOptions[0], leftMenuOpen: false};
    }
    handleClick(e){
        // this.setState({feed: e});
        if (e === 'openLeftMenu' && !this.state.leftMenuOpen) this.setState({leftMenuOpen: true})
    }
    closeMenu(){
        // if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false})
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
                    <LeftMenu open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()}></LeftMenu>
                    <FeedList feed={this.state.feed}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}