import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LazyLoad from './lazyLoad.component';
import DialogLoading from "./dialogLoading.component";
import LazyLoadError from "./lazyLoadError.component";
import axios from 'axios';

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
        axios.put('/api/sharePage/persistPost?postId=' + this.props.postData.id).then(response => {
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }
    renderShareDialogContent(){
        return (
            <div>
                Share
                <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                    <ShareDialogButtons text={this.props.postData.title} url={this.generateShareLink()}/>
                </LazyLoad>
                Copy Link
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