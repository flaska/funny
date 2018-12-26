import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';

export class InfoAlert extends React.Component {
    handleClose(){
        this.setState({ open: false });
    };
    render() {
        return (
        <Snackbar
            open={this.props.open}
            autoHideDuration={5000}
            onClose={()=>this.props.onClose()}
            message={<span id="message-id">Link copied to clip-board...</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={()=>this.props.onClose()}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />);
    }
};