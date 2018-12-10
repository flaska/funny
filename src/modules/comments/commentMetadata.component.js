import React from "react";
import Typography from "@material-ui/core/Typography";

export class CommentMetadata extends React.Component {
    render(){
        return(
            <Typography>
                Score | {this.props.commentData.score}
            </Typography>
        );
    }
}