import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import {FeedItemContent} from "./feedItemContent.component";

const styles = {
    content: {

    }
};

export class PostDialog extends React.Component {
    handleClose = () => {
        this.props.onClose();
    };
    render() {
        return (
            <Dialog maxWidth='md' open={this.props.open} onClose={this.handleClose}>
                <FeedItemContent style={styles.content} postData={this.props.postData}/>
            </Dialog>
        );
    }
}

