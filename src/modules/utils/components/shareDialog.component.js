import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LazyLoad from './lazyLoad.component';
import DialogLoading from "./dialogLoading.component";
import LazyLoadError from "./lazyLoadError.component";

const ShareDialogButtons = React.lazy(() =>  import('./shareDialogButtons.component'));

export default class ShareDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {open: true};
    }
    close(){
        this.setState({open: false});
        this.props.onClose();
    }
    renderShareDialogContent(){
        return (
            <div>
                Share link
                <LazyLoad loadingFallback={(<DialogLoading/>)} errorFallback={<LazyLoadError message='Offline... cannot open settings...'/>}>
                    <ShareDialogButtons postData={this.props.postData}/>
                </LazyLoad>
            </div>
        );
    }
    render(){
        if (navigator.share){
            navigator.share({
                title: this.props.postData.title,
                text: this.props.postData.title,
                url: this.props.postData.url,
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