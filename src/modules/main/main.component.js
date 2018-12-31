import React from 'react';
import MetaTags from 'react-meta-tags';
import {FeedList} from "../feed/feedList.component";
import {SlackerAppBar} from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";
import Analytics from '../utils/functions/analytics.service';
import {getEnabledFeeds, getFeedByName, getDefaultFeed} from '../utils/functions/feeds.provider'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

export class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {feed: getDefaultFeed(), leftMenuOpen: false};
        Analytics.setFeed(getDefaultFeed().tag);
    }
    openMenu(){
        this.setState({leftMenuOpen: true})
    }
    closeMenu(){
        if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false})
    }
    selectFeed(f){
        this.setState({leftMenuOpen: false});
        Analytics.setFeed(f.tag);
    }
    renderLeftMenu(){
        if (this.state.leftMenuOpen) return (
            <LazyLoad
                loadingFallback={(<DialogLoading/>)}
                errorFallback={<LazyLoadError message='Offline... cannot open menu...'/>}
            >
                <LeftMenu open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()} onSelectFeedSource={(f)=>this.selectFeed(f)}></LeftMenu>
            </LazyLoad>
        );
    }

    getFeed(feedName){
        return <FeedList feed={getFeedByName(feedName)}></FeedList>;
    }

    getContent(){
        return (
            <React.Fragment>
                {getEnabledFeeds().map(f=><Route path={'/'+f.tag} exact component={()=>this.getFeed(f.tag)} />)}
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"/>
                    <style>
                        { "#openLeftMenu:hover {\
                            background-color: rgba(0, 0, 0, 0.08)!important;\
                        }"}
                    </style>
                </MetaTags>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <SlackerAppBar openMenu={()=>this.openMenu()} feed={this.state.feed}></SlackerAppBar>
                    <Router>
                        <React.Fragment>
                    {this.renderLeftMenu()}
                    {this.getContent()}
                        </React.Fragment>
                    </Router>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}