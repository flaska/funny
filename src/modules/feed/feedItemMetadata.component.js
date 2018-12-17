import React from 'react';
import {InfoChip} from "../utils/infoChip.component";
import {formatNumber} from "../utils/formatNumber.function";

const styles = {
    main: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    div: {
        display: 'inline-block'
    }
};

export class FeedItemMetadata extends React.Component {
    render(){
        return (
            <div style={styles.main}>
                <InfoChip icon='like'>{formatNumber(this.props.postData.score)}</InfoChip>
                <div style={styles.div} className='feedItemMetadata_comments'>
                    <InfoChip icon='comment' color='primary'>{formatNumber(this.props.postData.numComments)}</InfoChip>
                </div>
            </div>
        );
    }
}