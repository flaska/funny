import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {provideIcon} from "../utils/icon.service";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {

};

const Feeds = require('../../shared/redditFeeds').reactFeeds;

export default class LeftMenuSettings extends React.Component {
    state = {};
    constructor(props) {
        super(props);
    }

    getFeedOptions(feeds){
        return feeds.map((feed)=>{ return(
            <ListItem button key={feed.name} className='leftMenu_feedSource'>
                <Checkbox
                    checked={this.state.checkedB}
                    onChange={()=>{}}
                    value="checkedB"
                    color="primary"
                />
                <ListItemIcon style={styles.feedIcon} className='leftMenu_selectSource'>
                    {provideIcon(feed.icon)}
                </ListItemIcon>
                <ListItemText primary={feed.name} className='leftMenu_selectSource'/>
            </ListItem>
        )});
    }

    render(){
        const {onClose, ...other } = this.props;
        return(
            <Dialog onClose={onClose} {...other}>
                <DialogTitle>Show/Hide Feeds in Left Menu</DialogTitle>
                {this.getFeedOptions(Feeds)}
            </Dialog>
        );
    }
}