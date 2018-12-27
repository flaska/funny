import React from 'react';
import MetaTags from 'react-meta-tags';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import LazyLoad from "../utils/lazyLoad.component";
import DialogLoading from "../utils/dialogLoading.component";
import LazyLoadError from "../utils/lazyLoadError.component";
const LeftMenu = React.lazy(() =>  import("../leftMenu/leftMenu.component"));

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

const Feeds = require('../../shared/redditFeeds').reactFeeds;

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {feed: Feeds[0], leftMenuOpen: false};
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
            <LazyLoad
                loadingFallback={(<DialogLoading/>)}
                errorFallback={<LazyLoadError message='Offline... cannot open menu...'/>}
            >
                <LeftMenu feedOptions={Feeds} open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()} onSelectFeedSource={(f)=>this.selectFeed(f)}></LeftMenu>
            </LazyLoad>
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
                    <SlackerAppBar feedOptions={Feeds} openMenu={()=>this.openMenu()} feed={this.state.feed}></SlackerAppBar>
                    {this.renderLeftMenu()}
                    <FeedList feed={this.state.feed}></FeedList>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}