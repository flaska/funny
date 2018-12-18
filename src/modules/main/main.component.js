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
    {name: 'Funny', url: '/api/reddit/feed?subreddit=funny&channel=hot', icon: 'sentiment_very_satisfied'},
    {name: 'Pics', url: '/api/reddit/feed?subreddit=pics&channel=hot', icon: 'photo_camera'},
    {name: 'Aww', url: '/api/reddit/feed?subreddit=aww&channel=hot', icon: 'fa_paw'}
];
export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {feed: FeedOptions[0], leftMenuOpen: false};
    }
    openMenu(){
        this.setState({leftMenuOpen: true})
    }
    closeMenu(){
        if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false})
    }
    selectFeed(f){
        this.setState({feed: f})
    }
    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                </MetaTags>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <SlackerAppBar feedOptions={FeedOptions} openMenu={()=>this.openMenu()} feed={this.state.feed}></SlackerAppBar>
                    <LeftMenu feedOptions={FeedOptions} open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()} onSelectFeedSource={(f)=>this.selectFeed(f)}></LeftMenu>
                    <FeedList feed={this.state.feed}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}