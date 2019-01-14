import React from 'react';
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

export default class Offline extends React.Component {
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