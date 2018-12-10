import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios/index";
import {Comment} from './comment.component'
import Button from "@material-ui/core/Button";

const styles = {
    buttons: {
        float: 'right'
    }
};

export class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {postId: this.props.postId};

        axios.get('/api/reddit/comments?postId='+this.state.postId).then(response => {
            this.setState({postId: this.state.postId, commentsRoot: response.data});
        });
    }
    render() {
        if (!this.state.commentsRoot) return (<div></div>);
        return (
            <Card>
                <CardContent>
                    <Comment commentData={this.state.commentsRoot}></Comment>
                    <div style={styles.buttons}>
                        <Button>
                            Close
                        </Button>
                        <Button color="secondary">
                            Comment
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
}