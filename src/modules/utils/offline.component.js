import React from 'react';
// import {FaSadCry} from 'react-icons/fa';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import Typography from "@material-ui/core/Typography";

const styles = {
    main: {
        margin: 'auto',
        textAlign: 'center'
    },
    reload: {
        cursor: 'pointer'
    }
};

export class Offline extends React.Component {
    reloadPage(){
        window.location.reload();
    }
    render(){
        return (
            <div style={styles.main}>
                <br/>
                <SentimentDissatisfiedIcon />
                <br/>
                <Typography style={styles.loading}>offline...</Typography>
                <br/>
                <Typography style={styles.reload} onClick={()=>{this.reloadPage()}} color='primary'>Reload the page?</Typography>
            </div>
        );
    }
}