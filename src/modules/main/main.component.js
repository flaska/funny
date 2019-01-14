import React from 'react';
import MetaTags from 'react-meta-tags';
import PostList from "../feed/postList.component";
import TopBar from "./topBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import Button from "@material-ui/core/es/Button/Button";
import Offline from "../utils/components/offline.component";

const LeftMenu = React.lazy(() =>  import("../leftMenu/leftMenu.component"));

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        useNextVariants: true,
    },
});

const styles = {
    more: {
        margin: 'auto',
        display: 'block',
        marginBottom: 50
    },
    loading: {
        textAlign: 'center'
    }
};

export default class Main extends React.Component {
    state = {};

    toggleLeftMenu(){
        if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false});
        else this.setState({leftMenuOpen: true})
    }

    newSourceSelected(){
        this.toggleLeftMenu();
        this.props.setSource();
    }
    renderLeftMenu(){
        if (this.state.leftMenuOpen) return (
            <LazyLoad
                loadingFallback={(<DialogLoading/>)}
                errorFallback={<LazyLoadError message='Offline... cannot open menu...'/>}
            >
                <LeftMenu open={this.state.leftMenuOpen} onClose={()=>this.toggleLeftMenu()} onSelectFeedSource={()=>this.newSourceSelected()}></LeftMenu>
            </LazyLoad>
        );
    }

    renderLoading(){
        if (!this.props.state.loading) return;
        let dummyPosts = [];
        for (let i=0; i<8; i++) {
            dummyPosts.push({id: i});
        }
        return (
            <React.Fragment>
                <LinearProgress />
                <PostList posts={dummyPosts}></PostList>
            </React.Fragment>
        );
    }

    renderMoreButton(){
        if (this.props.state.loading) return null;
        if (this.props.state.offline) return <Offline/>;
        if (this.props.state.feed.posts.length<100)return (
            <Button style={styles.more} variant="contained" color="primary" onClick={this.props.loadMorePosts}>
                More Fun
            </Button>
        );
    }

    render() {
        return (
            <React.Fragment>
                <MetaTags>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400"/>
                </MetaTags>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <TopBar openMenu={()=>this.toggleLeftMenu()} feed={this.props.state.feed} channelSelected={this.props.setChannel}></TopBar>
                    <React.Fragment>
                        {this.renderLeftMenu()}
                        <PostList posts={this.props.state.feed.posts}></PostList>
                        {this.renderLoading()}
                        {this.renderMoreButton()}
                    </React.Fragment>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}