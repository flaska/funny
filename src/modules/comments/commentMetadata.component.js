import React from "react";
import Typography from "@material-ui/core/Typography";
import {InfoChip} from "../utils/infoChip.component";

export class CommentMetadata extends React.Component {
    render(){
        return(
            <Typography>
                Score | {this.props.commentData.score}
                <InfoChip/>
            </Typography>
        );
    }
}