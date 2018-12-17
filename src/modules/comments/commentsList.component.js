import React from "react";
import axios from "axios/index";
import {Comment} from './comment.component'
import Typography from "@material-ui/core/Typography";

const styles = {
    hint: {display: 'inline-block'}
};

export class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postId: this.props.postId,
            dataFetched: false
        };

        axios.get('/api/reddit/comments?postId='+this.state.postId).then(response => {
            this.setState({postId: this.state.postId, commentsRoot: response.data, dataFetched: true});
        });
    }
    handleClick(event){
        this.props.onClick(event);
    }
    render() {
        if (!this.state.dataFetched) return null;
        return (
            <React.Fragment>
                <Typography color="primary" style={styles.hint}>
                    Top comments
                </Typography>
                <Comment commentData={this.state.commentsRoot}></Comment>
            </React.Fragment>
        );
    }
}