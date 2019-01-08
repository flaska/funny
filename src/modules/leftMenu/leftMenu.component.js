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
import IconButton from "@material-ui/core/IconButton";
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";

import FeedsCacheProvider from '../utils/functions/feedsCache.provider'

import {Link} from "react-router-dom";
import Analytics from "../utils/functions/analytics.service";

const LeftMenuSettings = React.lazy(() =>  import("./leftMenuSettings.component"));

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
    link: {
        textDecoration: 'none'
    },
    facebookLike: {
        margin: '7px 23px'
    }
};

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {settingsOpen: false};
    }
    onSelectFeedSource(f){
        this.props.onSelectFeedSource();
        Analytics.triggerSwitchFeed(f.tag);
    }
    getFeedOptions(){
        return FeedsCacheProvider.getEnabledFeeds().map((feed)=>{ return(
            <Link to={`/f/${feed.tag}`} key={feed.name} style={styles.link}>
                <ListItem button onClick={()=>this.onSelectFeedSource(feed)} className='leftMenu_feedSource'  id={'leftMenu_changeSourceLink_' + feed.tag}>
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
                    <div className="fb-like" data-href="https://www.4slack.com/" data-layout="button_count" style={styles.facebookLike}
                         data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                </Drawer>
                {this.renderSettings()}
            </React.Fragment>
        );
    }
}