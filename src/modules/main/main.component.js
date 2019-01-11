import React from 'react';
import MetaTags from 'react-meta-tags';
import PostList from "../feed/postList.component";
import SlackerAppBar from "./appBar.component";
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";
import LinearProgress from "@material-ui/core/es/LinearProgress/LinearProgress";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import {Offline} from "../utils/components/offline.component";

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
    constructor(props) {
        super(props);
    }

    toggleLeftMenu(){
        if (this.state.leftMenuOpen) this.setState({leftMenuOpen: false})
        else this.setState({leftMenuOpen: true})
    }
    renderLeftMenu(){
        if (this.state.leftMenuOpen) return (
            <LazyLoad
                loadingFallback={(<DialogLoading/>)}
                errorFallback={<LazyLoadError message='Offline... cannot open menu...'/>}
            >
                <LeftMenu open={this.state.leftMenuOpen} onClose={()=>this.toggleLeftMenu()} onSelectFeedSource={()=>this.toggleLeftMenu()}></LeftMenu>
            </LazyLoad>
        );
    }

    renderMoreButton(){
        if (this.props.state.loading) return (
            <React.Fragment>
                <br/>
                <LinearProgress />
                <br/>
                <Typography color="primary" style={styles.loading}>Loading...</Typography>
                <br/>
            </React.Fragment>
        );
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
                    <SlackerAppBar openMenu={()=>this.toggleLeftMenu()} feedName={this.props.state.feed.name} channel={this.props.state.feed.channel}></SlackerAppBar>
                    <React.Fragment>
                        {this.renderLeftMenu()}
                        <PostList posts={this.props.state.feed.posts} loadMorePosts={()=>this.loadMorePosts()}></PostList>
                        {this.renderMoreButton()}
                    </React.Fragment>
                </MuiThemeProvider>
            </React.Fragment>
        );
    }
}