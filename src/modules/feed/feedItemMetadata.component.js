import React from 'react';
import numeral from 'numeral';
import {InfoChip} from "../utils/infoChip.component";

const styles = {
    parent: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 5
    }
};

export class FeedItemMetadata extends React.Component {
    render(){
        return (
            <div style={styles.parent}>
                <InfoChip content={numeral(this.props.postData.score).format('0.0a')}/>
            </div>
        );
    }
}