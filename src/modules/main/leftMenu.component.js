import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import {provideIcon} from '../utils/icon.service';
import Typography from "@material-ui/core/Typography";


const styles = {
    feedsTitle: {
        marginTop: 15,
        marginLeft: 25
    },
    feedsIcon: {
        marginRight: 10
    }
};

export class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    getFeedOptions(){
        return this.props.feedOptions.map((feed)=>{ return(
            <ListItem button key={feed.name} onClick={()=>this.props.onSelectFeedSource(feed)}>
                <ListItemIcon style={styles.feedIcon}>
                    {provideIcon(feed.icon)}
                </ListItemIcon>
                <ListItemText primary={feed.name}/>
            </ListItem>
        )});
    }
    render(){
        return(
            <Drawer open={this.props.open} onClose={()=>this.props.onClose()}>
                <Typography variant="h5" style={styles.feedsTitle}>
                    <RssFeedIcon style={styles.feedsIcon}/>
                    Feeds
                </Typography>
                <List>
                    {this.getFeedOptions()}
                </List>
            </Drawer>
        );
    }
}