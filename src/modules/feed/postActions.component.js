import React from 'react';
import {InfoChip} from "../utils/components/infoChip.component";
import copy from 'copy-to-clipboard';
import {InfoAlert} from "../utils/components/infoAlert.component";

const styles = {
    button: {
        display: 'inline-block'
    }
};

export class PostActions extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    showOpenCloseIcon(){
        if (!this.props.parentState.showContent) return <InfoChip icon='fa_eye' clickable color='primary' responsive={true}>Open</InfoChip>;
        else return <InfoChip icon='fa_eye-slash' clickable responsive={true}>Close</InfoChip>;
    }
    showToggleCommentsIcon(){
        if (!this.props.parentState.showComments) return <InfoChip icon='md_comment' clickable color='primary' responsive={true}>Comments</InfoChip>
        else return <InfoChip icon='md_comment' clickable responsive={true}>Close</InfoChip>;
    }
    shareLink(){
        if (navigator.share) {
            navigator.share({
                title: this.props.postData.title,
                url: this.props.postData.url,
            }).then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            copy(this.props.postData.url);
            this.setState({shareDialogOpen: true});
        }
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
                <div style={styles.button} className='postActions_share' onClick={()=>{this.shareLink()}}>
                    <InfoChip icon='fa_external-link-alt' clickable color='primary' responsive={true}>Share</InfoChip>
                </div>
                <InfoAlert open={this.state.shareDialogOpen} onClose={()=>this.setState({shareDialogOpen: false})}>Link copied to clip-board...</InfoAlert>
            </div>
        );
    }
}

