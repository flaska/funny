import React from 'react';
import Drawer from '@material-ui/core/Drawer';

export class LeftMenu extends React.Component {
    render(){
        return(<Drawer open={this.state.open} onClose={this.toggleDrawer('left', false)}>xxx</Drawer>);
    }
}