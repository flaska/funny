import React from 'react';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

export class PostDialog extends React.Component {
    handleClose = () => {
        this.props.onClose();
    };
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.handleClose}>
                <DialogTitle>{this.props.postData.title}</DialogTitle>
                <div>
                </div>
            </Dialog>
        );
    }
}

