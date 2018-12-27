import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Headroom from "react-headroom";

const styles = {
    root: {
        flexGrow: 1,
    },
    logo: {
        height: 42,
        marginLeft: 23,
        marginRight: 23
    }
};

export function SlackerAppBar(props){
    return (
        <div className={styles.root}>
            <Headroom>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" aria-label="Menu" onClick={()=>props.openMenu()} id='openLeftMenu'>
                        <MenuIcon />
                    </IconButton>
                    <img alt='4slack logo' style={styles.logo} src='./logo-appbar-white.png'/>
                    <Typography color="inherit">
                        {props.feed.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            </Headroom>
        </div>
    );
}