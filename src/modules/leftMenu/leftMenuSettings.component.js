import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {provideIcon} from "../utils/icon.service";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText';

const styles = {

};

export default class LeftMenuSettings extends React.Component {

    constructor(props) {
        super(props);
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

    render(){
        const {onClose, ...other } = this.props;
        return(
            <Dialog {...other}>
                <DialogTitle>Set backup account</DialogTitle>
                {this.getFeedOptions()}
            </Dialog>
        );
    }
}