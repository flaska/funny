import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SettingsIcon from "@material-ui/icons/Settings";
import {provideIcon} from '../utils/functions/icon.service';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";

import FeedsProvider from '../utils/functions/feeds.provider'
import Button from "@material-ui/core/es/Button/Button";
import {FaComment} from 'react-icons/fa';

import {Link} from "react-router-dom";
import Analytics from "../utils/functions/analytics.service";

const LeftMenuSettings = React.lazy(() =>  import("./leftMenuSettings.component"));
const FeedbackDialog = React.lazy(() =>  import("./feedbackDialog.component"));

const styles = {
    feedsTitle: {
        marginTop: 15,
        marginLeft: 25,
    },
    feedsIcon: {
        marginRight: 10,
        marginTop: 7,
        display: 'inline-block'
    },
    settingsIcon: {
        float: 'right',
        marginRight: 15,
        marginLeft: 15
    },
    feedbackIcon: {
        transform: 'scaleX(-1)'
    },
    about: {
        margin: 20
    },
    link: {
        textDecoration: 'none'
    }
};

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {settingsOpen: false};
    }
    onSelectFeedSource(f){
        this.props.onSelectFeedSource();
        Analytics.setFeed(f.tag);
    }
    getFeedOptions(){
        return FeedsProvider.getEnabledFeeds().map((feed)=>{ return(
            <Link to={feed.tag} key={feed.name} style={styles.link}>
                <ListItem button onClick={()=>this.onSelectFeedSource(feed)} className='leftMenu_feedSource'>
                    <ListItemIcon style={styles.feedIcon} className='leftMenu_selectSource'>
                        <Typography color='primary'>{provideIcon(feed.icon)}</Typography>
                    </ListItemIcon>
                    <ListItemText color='primary' primary={<Typography color='primary'>{feed.name}</Typography>} className='leftMenu_selectSource'/>
                </ListItem>
            </Link>
        )});
    }
    toggleSettings(){
        if (this.state.settingsOpen) this.setState({settingsOpen: false});
        else this.setState({settingsOpen: true});
    }
    renderSettings(){
        if (this.state.settingsOpen) return (
            <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                <LeftMenuSettings open={this.state.settingsOpen} onClose={()=>this.toggleSettings()}/>
            </LazyLoad>);
    }
    toggleFeedbackDialog(){
        if (this.state.feedbackDialogOpen) this.setState({feedbackDialogOpen: false});
        else this.setState({feedbackDialogOpen: true});
    }
    renderFeedbackDialog(){
        if (this.state.feedbackDialogOpen) return (
            <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline...'/>}>
                <FeedbackDialog open={this.state.feedbackDialogOpen} onClose={()=>this.toggleFeedbackDialog()}/>
            </LazyLoad>);
    }
    render(){
        return(
            <React.Fragment>
                <Drawer open={this.props.open} onClose={()=>this.props.onClose()} id='leftMenu'>
                    <Typography variant="h5" style={styles.feedsTitle}>
                        <RssFeedIcon style={styles.feedsIcon}/>
                        Feeds
                        <IconButton color='primary' id='openLeftMenuSettings' style={styles.settingsIcon} onClick={()=>this.toggleSettings()}>
                            <SettingsIcon/>
                        </IconButton>
                    </Typography>
                    <List>
                        {this.getFeedOptions()}
                    </List>
                    <Divider/>
                    <br/><br/>
                    <Typography variant="h5"  style={styles.feedsTitle}>
                        About 4slack
                    </Typography>
                    <div style={styles.about}>
                        <Button color="primary" onClick={()=>this.toggleFeedbackDialog()} id='#openFeedback'>
                            <FaComment style={styles.feedbackIcon}/>&nbsp;Feedback
                        </Button>
                    </div>
                </Drawer>
                {this.renderSettings()}
                {this.renderFeedbackDialog()}
            </React.Fragment>
        );
    }
}