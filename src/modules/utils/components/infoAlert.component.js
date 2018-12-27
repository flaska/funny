import React from 'react';
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';

export function InfoAlert(props) {
        return (
        <Snackbar
            open={props.open}
            autoHideDuration={5000}
            onClose={()=>props.onClose()}
            message={props.children}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={()=>props.onClose()}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />);
};