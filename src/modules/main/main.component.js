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
import FeedsProvider from '../utils/functions/feeds.provider'
import getFeedNameFromUrl from '../utils/functions/feedNameFromUrl.service';

import { BrowserRouter as Router, Route} from "react-router-dom";

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

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {leftMenuOpen: false};
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevState);
    }

    openMenu(){
        this.setState({leftMenuOpen: true})
    }
    closeMenu(){
        if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false})
    }
    renderLeftMenu(){
        if (this.state.leftMenuOpen) return (
            <LazyLoad
                loadingFallback={(<DialogLoading/>)}
                errorFallback={<LazyLoadError message='Offline... cannot open menu...'/>}
            >
                <LeftMenu open={this.state.leftMenuOpen} onClose={()=>this.closeMenu()} onSelectFeedSource={()=>this.closeMenu()}></LeftMenu>
            </LazyLoad>
        );
    }


    getContent(){
        return (
            <FeedList feed={FeedsProvider.getFeedByName(getFeedNameFromUrl())}></FeedList>
        );
    }


    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400"/>
                    <style>

                    </style>
                </MetaTags>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <SlackerAppBar openMenu={()=>this.openMenu()} feed={FeedsProvider.getFeedByName(getFeedNameFromUrl())}></SlackerAppBar>
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