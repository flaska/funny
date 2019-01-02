import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';

export default class ShareDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {open: true};
    }
    close(){
        this.setState({open: false});
        this.props.onClose();
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
                message={<span id="message-id">Note archived</span>}
                action={[
                    <IconButton
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