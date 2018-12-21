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

export class PostActions extends React.Component {
    render(){
        return (
            <div style={styles.main}>
                <div style={styles.div}  className='postActions_openContent' onClick={()=>{this.props.onOpenContentClick()}}>
                    <InfoChip icon='fa_eye' clickable color='primary'>Open</InfoChip>
                </div>
                <div style={styles.div} className='postActions_openComments' onClick={()=>{this.props.onCommentsClick()}}>
                    <InfoChip icon='md_comment' clickable color='primary'>{formatNumber(this.props.postData.numComments)}</InfoChip>
                </div>
                <div style={styles.div} className='postActions_openSource' onClick={()=>{this.props.onOpenSourceClick()}}>
                    <InfoChip icon='fa_external-link-alt' clickable color='primary'>Source</InfoChip>
                </div>
            </div>
        );
    }
}

