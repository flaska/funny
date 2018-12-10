import React from "react";
import {InfoChip} from "../utils/infoChip.component";
import numeral from "numeral";

const styles = {
    infoChip:{
        // zoom: 0.8,
    }
};

export class CommentMetadata extends React.Component {
    render(){
        return(
            <div style={styles.infoChip}>
                <InfoChip icon='like'>{numeral(this.props.commentData.score).format('0.0a')}</InfoChip>
            </div>
        );
    }
}