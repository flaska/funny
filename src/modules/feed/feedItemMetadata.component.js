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
    constructor(props){
        super(props);
        this.fromNow = moment.utc(this.props.postData.dateUtc).fromNow();
    }
    render(){
        return (
            <div style={styles.parent}>
                <Typography>{this.fromNow}</Typography>
            </div>
        );
    }
}