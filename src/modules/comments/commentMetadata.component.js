import React from "react";
import {InfoChip} from "../utils/infoChip.component";
import {formatNumber} from "../utils/formatNumber.function";

export class CommentMetadata extends React.Component {

    render(){
        return(
            <div>
                <InfoChip icon='face'>{this.props.commentData.author}</InfoChip>
                <InfoChip icon='like'>{formatNumber(this.props.commentData.score)}</InfoChip>
            </div>
        );
    }
}