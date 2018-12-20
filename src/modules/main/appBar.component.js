import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';

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

export class SlackerAppBar extends React.Component {
    render(){
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={()=>this.props.openMenu()} id='openLeftMenu'>
                            <MenuIcon />
                        </IconButton>
                        <img alt='4slack logo' style={styles.logo} src='./logo-appbar-white.png'/>
                        <Typography variant='h5' color="inherit">
                            {this.props.feed.name}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}