import React, {Suspense} from 'react';
import MetaTags from 'react-meta-tags';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
const LeftMenu = React.lazy(() =>  import("./leftMenu.component"));

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
const styles = {
    leftMenuLoading: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 100,
        textAlign: 'center',
        paddingTop: 200
    },
    leftMenuLoadingText: {
        color: 'white!important'
    }
};

const FeedOptions = [
    {name: 'Funny', url: '/api/reddit/feed?subreddit=funny&channel=hot', icon: 'md_sentiment_very_satisfied'},
    {name: 'World News', url: '/api/reddit/feed?subreddit=worldnews&channel=hot', icon: 'fa_globe_americas'},
    {name: 'Pics', url: '/api/reddit/feed?subreddit=pics&channel=hot', icon: 'md_photo_camera'},
    {name: 'Science', url: '/api/reddit/feed?subreddit=science&channel=hot', icon: 'fa_flask'},
    {name: 'Gaming', url: '/api/reddit/feed?subreddit=gaming&channel=hot', icon: 'fa_gamepad'},
    {name: 'Today I Learned...', url: '/api/reddit/feed?subreddit=todayilearned&channel=hot', icon: 'fa_lightbulb'},
    {name: 'Videos', url: '/api/reddit/feed?subreddit=videos&channel=hot', icon: 'fa_video'},
    {name: 'Movies', url: '/api/reddit/feed?subreddit=movies&channel=hot', icon: 'fa_film'},
    {name: 'Aww', url: '/api/reddit/feed?subreddit=aww&channel=hot', icon: 'fa_paw'},
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
        this.setState({feed: f, leftMenuOpen: false});
    }
    renderLeftMenu(){
        if (this.state.leftMenuOpen) return (
            <Suspense fallback={
                <div style={styles.leftMenuLoading}>
                    <CircularProgress/>
                    <Typography variant='h4' color='primary' style={styles.leftMenuLoadingText}>Loading...</Typography>
                </div>
            }>
                <LeftMenu feedOptions={FeedOptions} open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()} onSelectFeedSource={(f)=>this.selectFeed(f)}></LeftMenu>
            </Suspense>
        );
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
                    {this.renderLeftMenu()}
                    <FeedList feed={this.state.feed}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}