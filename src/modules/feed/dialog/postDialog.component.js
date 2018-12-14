import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {FeedItemContent} from "./feedItemContent.component";

export class PostDialog extends React.Component {
    handleClose = () => {
        this.props.onClose();
    };
    render() {
        return (
            <Dialog open={this.props.open} onClose={this.handleClose}>
                <DialogTitle>{this.props.postData.title}</DialogTitle>
                <FeedItemContent postData={this.props.postData}/>
            </Dialog>
        );
    }
}

