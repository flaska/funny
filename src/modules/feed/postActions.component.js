import React from 'react';
import {InfoChip} from "../utils/infoChip.component";
import {formatNumber} from "../utils/formatNumber.function";

const styles = {
    button: {
        display: 'inline-block'
    }
};

export class PostActions extends React.Component {
    showOpenCloseIcon(){
        if (!this.props.parentState.showContent) return <InfoChip icon='fa_eye' clickable color='primary'>Open</InfoChip>;
        else return <InfoChip icon='fa_eye-slash' clickable>Close</InfoChip>;
    }
    showToggleCommentsIcon(){
        if (!this.props.parentState.showComments) return <InfoChip icon='md_comment' clickable color='primary'>{formatNumber(this.props.postData.numComments)}</InfoChip>
        else return <InfoChip icon='md_comment' clickable>Close</InfoChip>;
    }
    render(){
        return (
            <div>
                <div style={styles.button}  className='postActions_openContent' onClick={()=>{this.props.onOpenContentClick()}}>
                    {this.showOpenCloseIcon()}
                </div>
                <div style={styles.button} className='postActions_openComments' onClick={()=>{this.props.onCommentsClick()}}>
                    {this.showToggleCommentsIcon()}
                </div>
                <div style={styles.button} className='postActions_openSource' onClick={()=>{this.props.onOpenSourceClick()}}>
                    <InfoChip icon='fa_external-link-alt' clickable color='primary'>Source</InfoChip>
                </div>
            </div>
        );
    }
}

