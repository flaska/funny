import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {provideIcon} from "../utils/functions/icon.service";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {getAllFeedsFromStorage, saveSelectedFeeds} from '../utils/functions/feeds.provider';

const styles = {
    feedIcon: {
        marginRight: 0,
        marginLeft: 10
    },
    buttons: {
        textAlign: 'right',
        margin: 15
    }
};



export default class LeftMenuSettings extends React.Component {
    state = {
        feedOptions: getAllFeedsFromStorage()
    };
    constructor(props) {
        super(props);
    }

    getFeedOptions(){
        return getAllFeedsFromStorage().map((feed, i)=>{ return(
            <ListItem button key={feed.name} className='leftMenu_feedSource'>
                <Checkbox
                    checked={feed.enabled}
                    onChange={()=>{
                        this.state.feedOptions[i].enabled = !this.state.feedOptions[i].enabled;
                        this.setState({feedOptions: this.state.feedOptions})
                    }}
                    color="primary"
                />
                <ListItemIcon style={styles.feedIcon} className='leftMenu_selectSource'>
                    {provideIcon(feed.icon)}
                </ListItemIcon>
                <ListItemText primary={feed.name} className='leftMenu_selectSource'/>
            </ListItem>
        )});
    }

    saveSelectedFeeds(){
        saveSelectedFeeds(this.state.feedOptions);
        this.props.onClose();
    }

    render(){
        const {onClose, ...other } = this.props;
        return(
            <Dialog onClose={onClose} {...other}>
                <DialogTitle>Show/Hide Feeds in Left Menu</DialogTitle>
                {this.getFeedOptions()}
                <div style={styles.buttons}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={()=>this.saveSelectedFeeds()} variant="contained" color="secondary" id='leftMenuSettings_save'>
                        Save
                    </Button>
                </div>
            </Dialog>
        );
    }
}