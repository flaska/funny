import React from 'react';
import Drawer from '@material-ui/core/Drawer';

export class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(<Drawer open={this.props.open} onClose={()=>this.props.onClose()}>menu...</Drawer>);
    }
}