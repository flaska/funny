import React from 'react';
import {InfoChip} from "../utils/infoChip.component";
import {formatNumber} from "../utils/formatNumber.function";

const styles = {
    main: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    }
};

export class FeedItemMetadata extends React.Component {
    render(){
        return (
            <div style={styles.main}>
                <InfoChip icon='comment' color='primary' clickable>{formatNumber(this.props.postData.score)}</InfoChip>
                <InfoChip icon='like'>{formatNumber(this.props.postData.score)}</InfoChip>
            </div>
        );
    }
}