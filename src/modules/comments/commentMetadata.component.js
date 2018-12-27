import React from "react";
import {InfoChip} from "../utils/infoChip.component";
import {formatNumber} from "../utils/formatNumber.function";

export function CommentMetadata(props){
    return(
        <div>
            <InfoChip icon='md_face'>{props.commentData.author}</InfoChip>
            <InfoChip icon='md_thumb_up'>{formatNumber(props.commentData.score)}</InfoChip>
        </div>
    );
}