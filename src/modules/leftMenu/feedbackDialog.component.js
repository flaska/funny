import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import {FaComment} from 'react-icons/fa';
import TextField from "@material-ui/core/es/TextField/TextField";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";

const styles = {
    buttons: {
        textAlign: 'right',
    },
    feedbackIcon: {
        transform: 'scaleX(-1)'
    },

};



export default class FeedbackDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    updateMessage(event){
        this.message = event.target.value;
        event.preventDefault();
    }

    sendFeedback(event){
        event.preventDefault();
        window.dataLayer.push({'event': 'sendFeedback', 'feedbackMessage':  this.message});
        this.props.onClose();
    }

    render(){
        const {onClose, ...other } = this.props;
        return(
            <Dialog onClose={onClose} {...other} id='leftMenuSettingDialog' fullWidth={true}>
                <DialogTitle><FaComment style={styles.feedbackIcon}/>&nbsp;Feedback</DialogTitle>
                <DialogContent>
                    <TextField
                        multiline
                        rows="4"
                        rowsMax="20"
                        placeholder="Tell us..."
                        style={styles.input}
                        margin="normal"
                        fullWidth={true}
                        onChange={(e)=>{this.updateMessage(e)}}
                    />
                    <div style={styles.buttons}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={(e)=>{this.sendFeedback(e)}} variant="contained" color="secondary" id='feedbackDialog_sendFeedback'>
                            Send
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}