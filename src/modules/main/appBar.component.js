import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    logo: {
        height: 42,
        marginTop: 8
    }
};

export class SlackerAppBar extends React.Component {
    render(){
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            <img style={styles.logo} src='./logo-rect.png'/>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}