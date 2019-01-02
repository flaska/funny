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
        axios.put('/api/sharePersist/persistPost?postId=' + this.props.postData.id).then(response => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }
    copyToClipboard(){
        copy(this.props.postData.title + ' ' + this.props.postData.url);
        this.setState({linkCopied: true});

    }
    renderShareDialogContent(){
        return (
            <div>
                Share - {this.props.postData.title.substr(0, 50)}...
                <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                    <ShareDialogButtons text={this.props.postData.title} url={this.generateShareLink()}/>
                </LazyLoad>
                <Button color="primary" onClick={()=>{this.copyToClipboard()}}>
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
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
                />
        );
    };
}