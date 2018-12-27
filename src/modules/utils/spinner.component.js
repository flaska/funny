import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
    main: {
        textAlign: 'center',
        padding: 10,
        width: '100%'
    }
};

export default class Spinner extends React.Component {
    render(){
        return (
            <div style={styles.main}>
                <CircularProgress/>
            </div>
        )
    }
}