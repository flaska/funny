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
    handleClick(event){
        this.props.onClick(event);
    }
    render(){
        return (
            <div style={styles.main}>
                <div style={styles.div} onClick={()=>this.handleClick('comments')}><InfoChip icon='comment' color='primary' clickable >{formatNumber(this.props.postData.score)}</InfoChip></div>
                <InfoChip icon='like'>{formatNumber(this.props.postData.score)}</InfoChip>
            </div>
        );
    }
}