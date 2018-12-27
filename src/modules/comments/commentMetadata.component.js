import React from "react";
import {InfoChip} from "../utils/components/infoChip.component";
import {formatNumber} from "../utils/functions/formatNumber.function";

export function CommentMetadata(props){
    return(
        <div>
            <InfoChip icon='md_face'>{props.commentData.author}</InfoChip>
            <InfoChip icon='md_thumb_up'>{formatNumber(props.commentData.score)}</InfoChip>
        </div>
    );
}