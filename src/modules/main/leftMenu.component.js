import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    getFeedOptions(){
        return this.props.feedOptions.map((feed)=>{ return(
            <ListItem button key={feed.name} onClick={()=>this.props.onSelectFeedSource(feed)}>
                <ListItemText primary={feed.name} />
            </ListItem>
        )});
    }
    render(){
        return(
            <Drawer open={this.props.open} onClose={()=>this.props.onClose()}>
                <List>
                    {this.getFeedOptions()}
                </List>
            </Drawer>
        );
    }
}