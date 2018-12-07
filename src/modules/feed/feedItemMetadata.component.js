import React from 'react';
import moment from 'moment';
import Typography from "@material-ui/core/Typography";

const styles = {
    parent: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
};

export class FeedItemMetadata extends React.Component {
    render(){
        return (
            <div style={styles.parent}>
                <Typography>{this.props.postData.score}</Typography>
            </div>
        );
    }
}