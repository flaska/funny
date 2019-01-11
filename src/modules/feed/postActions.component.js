import React from 'react';
import {InfoChip} from "../utils/components/infoChip.component";
import LazyLoad from "../utils/components/lazyLoad.component";
import DialogLoading from "../utils/components/dialogLoading.component";
import LazyLoadError from "../utils/components/lazyLoadError.component";

const ShareDialog = React.lazy(() =>  import('../utils/components/shareDialog.component'));

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
    showToggleShareDialogIcon(){
        if (!this.state.shareDialogOpen) return <div className='cy_actionBar_sharePost' onClick={()=>{this.toggleShareDialog()}}><InfoChip icon='fa_external-link-alt' clickable color='primary' responsive={true} >Share</InfoChip></div>
        else return <div onClick={()=>{this.toggleShareDialog()}}><InfoChip icon='fa_external-link-alt' clickable responsive={true}>Share</InfoChip></div>
    }
    renderShareDialog(){
        if (this.state.shareDialogOpen) return (
            <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                <ShareDialog onClose={()=>{this.toggleShareDialog()}} postData={this.props.postData}/>
            </LazyLoad>
        );
    }
    toggleShareDialog(){
        if (this.state.shareDialogOpen) this.setState({shareDialogOpen: false});
        else this.setState({shareDialogOpen: true});
    }
    render(){
        return (
            <div>
                <div style={styles.button}  className='postActions_openContent tm_openContentEye' onClick={()=>{this.props.onOpenContentClick()}}>
                    {this.showOpenCloseIcon()}
                </div>
                <div style={styles.button} className='postActions_openComments' onClick={()=>{this.props.onCommentsClick()}}>
                    {this.showToggleCommentsIcon()}
                </div>
                <div style={styles.button} className='postActions_share'>
                    {this.showToggleShareDialogIcon()}
                    {this.renderShareDialog()}
                </div>
            </div>
        );
    }
}

