import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

const styles = {
    loadingOverlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 10000,
        textAlign: 'center',
        paddingTop: 200
    },
    loadingText: {
        color: 'white!important'
    }
};

export default function DialogLoading(){
    return(
        <div style={styles.loadingOverlay}>
            <CircularProgress/>
            <Typography variant='h4' color='primary' style={styles.loadingText}>Loading...</Typography>
        </div>
    );
}