import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from '@material-ui/core/Divider';
import {CommentMetadata} from "./commentMetadata.component";

const styles = {
    replies: {
        marginLeft: 50
    }
};

export class Comment extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        if (this.props.commentData.body) this.state.body = this.props.commentData.body.replace(/\n/g, '<br>');
    }
    showBody(data){
        if (!data.body) return(<div></div>);
        return(
            <React.Fragment>
                <CommentMetadata commentData={this.props.commentData}/>
                <Typography dangerouslySetInnerHTML={{__html: this.state.body}}></Typography>
                <Divider />
            </React.Fragment>);
    }
    isIndented(commentData){
        if (commentData.body) return styles.replies;
    }
    render() {
        return (
            <React.Fragment>
                {this.showBody(this.props.commentData)}
                <div style={this.isIndented(this.props.commentData)}>
                    {this.props.commentData.replies.map(r=><Comment commentData={r} key={r._id}></Comment>)}
                </div>
            </React.Fragment>
        );
    }
}