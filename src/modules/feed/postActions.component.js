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
        if (!this.props.parentState.showContent) return <InfoChip icon='fa_eye' clickable color='primary' responsive={true}>Open</InfoChip>;
        else return <InfoChip icon='fa_eye-slash' clickable responsive={true}>Close</InfoChip>;
    }
    showToggleCommentsIcon(){
        if (!this.props.parentState.showComments) return <InfoChip icon='md_comment' clickable color='primary' responsive={true}>Comments</InfoChip>
        else return <InfoChip icon='md_comment' clickable responsive={true}>Close</InfoChip>;
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
                <div style={styles.button} className='postActions_share' onClick={()=>{this.props.onShareClick()}}>
                    <InfoChip icon='fa_external-link-alt' clickable color='primary' responsive={true}>Share</InfoChip>
                </div>
            </div>
        );
    }
}

