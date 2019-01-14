import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Headroom from "react-headroom";
import Fab from "@material-ui/core/es/Fab/Fab";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {MetaTags} from "react-meta-tags";

const styles = {
    logo: {
        height: 42,
        marginLeft: 23,
        marginRight: 23
    },
    channelSelect: {
        marginLeft: 10,
        color: 'white'
    }
};

export default class TopBar extends React.Component{
    showChannelSelect(){
        if (!this.props.feed.channel) return null;
        return (
            <div id='css_topBar_channelSelect_wrapper'>
                <Select
                    SelectDisplayProps={{id: 'cy_topBar_channelSelect'}}
                    value={this.props.feed.channel}
                    onChange={(event)=>this.props.channelSelected(event.target.value)}
                    style={styles.channelSelect}
                >
                    <MenuItem id='cy_topBar_channel_hot' value={'hot'} className='tag_selectChannel'>Today</MenuItem>
                    <MenuItem id='cy_topBar_channel_topWeek' value={'topweek'} className='tag_selectChannel'>Last Week</MenuItem>
                    <MenuItem id='cy_topBar_channel_topMonth' value={'topmonth'} className='tag_selectChannel'>Last Month</MenuItem>
                </Select>
            </div>
        )
    }

    render(){
        return (
            <div id='topBar'>
                <MetaTags>
                    <style>
                        {`
                            #topBar #css_topBar_channelSelect_wrapper svg {color: white;}
                            #topBar #css_topBar_channelSelect_wrapper div:before {border-bottom: 1px solid white;}
                            #topBar #css_topBar_channelSelect_wrapper div:hover:before {border-bottom: 2px solid white!important;}
                        `}
                    </style>
                </MetaTags>
                <Headroom>
                    <AppBar position="static">
                        <Toolbar>
                            <Fab color="secondary" aria-label="Open Menu" onClick={this.props.openMenu} id='openLeftMenu'>
                                <MenuIcon/>
                            </Fab>
                            <img alt='4slack logo' style={styles.logo} src='/logo-appbar-white.png'/>
                            <Typography color="inherit">
                                {this.props.feed.fullName}
                            </Typography>
                            {this.showChannelSelect()}
                        </Toolbar>
                    </AppBar>
                </Headroom>
            </div>
        );
    }
}