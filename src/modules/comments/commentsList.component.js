import React from "react";
import {Comment} from './comment.component'
import {InfoChip} from "../utils/components/infoChip.component";
import Spinner from "../utils/components/spinner.component";

const styles = {
    hint: {display: 'inline-block'},
    seeAllButton: {
        display: 'inline-block'
    }
};

export default class CommentsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            postId: this.props.postId,
            dataFetched: false
        };
        fetch('/api/reddit/comments?postId='+this.state.postId).then(response => response.json()).then(response => {
            this.setState({commentsRoot: response, dataFetched: true});
        });
    }
    render() {
        if (!this.state.dataFetched) return (<Spinner/>);
        return (
            <div className='commentsContainer'>
                <InfoChip style={styles.hint}  icon='md_thumb_up'>
                    Top comments
                </InfoChip>
                <div style={styles.seeAllButton} className='comments_openSource' onClick={()=>{this.props.onOpenSourceClick()}}>
                    <InfoChip icon='fa_comments' clickable color='primary' responsive={false}>All Comments</InfoChip>
                </div>
                <Comment commentData={this.state.commentsRoot}></Comment>
            </div>
        );
    }
}
