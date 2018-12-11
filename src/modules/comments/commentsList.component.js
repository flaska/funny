import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import axios from "axios/index";
import {Comment} from './comment.component'
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
    buttons: {
        float: 'right'
    },
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
        if (!this.state.dataFetched) return (<LinearProgress />);
        return (
            <Card>
                <CardContent>
                    <Comment commentData={this.state.commentsRoot}></Comment>
                    <div style={styles.buttons}>
                        <Typography style={styles.hint}>
                            Showing top comments...
                        </Typography>
                        <Button onClick={()=>this.handleClick('collapseComments')}>
                            Close
                        </Button>
                        <Button color="primary" onClick={()=>this.props.onClick('seeAll')}>
                            See All
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    }
}