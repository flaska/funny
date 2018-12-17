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
        marginTop: 8,
        marginLeft: 20
    },
    feedChoice: {
        color: 'white'
    }
};

export class SlackerAppBar extends React.Component {
    render(){
        return (
            <div className={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu" onClick={()=>this.props.onClick('openLeftMenu')}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            <img alt='4slack logo' style={styles.logo} src='./logo-rect.png'/>
                        </Typography>
                        {/*{this.props.feedOptions.map((feed)=><Button style={styles.feedChoice} onClick={()=>{this.props.onClick(feed)}}>{feed.name}</Button>)}*/}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}