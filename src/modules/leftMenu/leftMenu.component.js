import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SettingsIcon from "@material-ui/icons/Settings";
import {provideIcon} from '../utils/icon.service';
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import LeftMenuSettings from "./leftMenuSettings.component";

const styles = {
    feedsTitle: {
        marginTop: 15,
        marginLeft: 25,
        marginBottom: 10
    },
    feedsIcon: {
        marginRight: 10,
        marginTop: 7,
        display: 'inline-block'
    },
    settingsIcon: {
        float: 'right',
        marginRight: 15
    }
};

export default class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {settingsOpen: false};
    }
    getFeedOptions(){
        return this.props.feedOptions.map((feed)=>{ return(
            <ListItem button key={feed.name} onClick={()=>this.props.onSelectFeedSource(feed)} className='leftMenu_feedSource'>
                <ListItemIcon style={styles.feedIcon} className='leftMenu_selectSource'>
                    {provideIcon(feed.icon)}
                </ListItemIcon>
                <ListItemText primary={feed.name} className='leftMenu_selectSource'/>
            </ListItem>
        )});
    }
    toggleSettings(){
        if (this.state.settingsOpen) this.setState({settingsOpen: false});
        else this.setState({settingsOpen: true});
    }
    render(){
        return(
            <React.Fragment>
                <Drawer open={this.props.open} onClose={()=>this.props.onClose()} id='leftMenu'>
                    <Typography variant="h5" style={styles.feedsTitle}>
                        <RssFeedIcon style={styles.feedsIcon}/>
                        Feeds
                        <IconButton color='primary' style={styles.settingsIcon} onClick={()=>this.toggleSettings()}>
                            <SettingsIcon/>
                        </IconButton>
                    </Typography>
                    <Divider/>
                    <List>
                        {this.getFeedOptions()}
                    </List>
                </Drawer>
                <LeftMenuSettings open={this.state.settingsOpen}/>
            </React.Fragment>
        );
    }
}