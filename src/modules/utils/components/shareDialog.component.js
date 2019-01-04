import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LazyLoad from './lazyLoad.component';
import DialogLoading from "./dialogLoading.component";
import LazyLoadError from "./lazyLoadError.component";
import axios from 'axios';
import Button from "@material-ui/core/es/Button/Button";
import copy from 'copy-to-clipboard';
import {InfoAlert} from "./infoAlert.component";

const ShareDialogButtons = React.lazy(() =>  import('./shareDialogButtons.component'));

export default class ShareDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {open: true};
        this.requestPostCopy();
    }
    generateShareLink(){
        return 'https://www.4slack.com/sh/' + this.props.postData.id;
    }
    close(){
        this.setState({open: false});
        this.props.onClose();
    }
    requestPostCopy(){
        fetch('/api/sharePersist/persistPost?postId=' + this.props.postData.id, {method: 'PUT'}).then(response => {
        }).catch((error)=>{
            console.log(error);
        });
    }
    copyToClipboard(){
        copy(this.generateShareLink());
        this.setState({linkCopied: true});
    }
    renderShareDialogContent(){
        return (
            <div>
                Share - {this.props.postData.title.substr(0, 50)}...
                <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                    <ShareDialogButtons text={this.props.postData.title} url={this.generateShareLink()}/>
                </LazyLoad>
                <Button color="primary" onClick={()=>{this.copyToClipboard()}} className='cy_shareDialog_copyLink'>
                    Copy Link
                </Button>
                {this.generateShareLink()}
                <InfoAlert open={this.state.linkCopied} onClose={()=>this.setState({linkCopied: false})}>Link copied to clip-board...</InfoAlert>
            </div>
        );
    }
    render(){
        if (navigator.share){
            navigator.share({
                title: this.props.postData.title,
                text: this.props.postData.title,
                url: this.generateShareLink(),
            });
            return null;
        }
        return (
            <Snackbar
                open={this.state.open}
                message={this.renderShareDialogContent()}
                action={[
                    <IconButton
                        key='close'
                        color="inherit"
                        onClick={()=>this.close()}
                        className='cy_shareDialog_close'
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
                />
        );
    };
}