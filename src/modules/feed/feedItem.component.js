import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {FeedItemMetadata} from './feedItemMetadata.component';
import moment from "moment/moment";
import {CommentsList} from "../comments/commentsList.component";
import {FeedItemContent} from "./feedItemContent.component";

const styles = {
    card: {
        width: '100%',
        position: 'relative'
    },
    img: {
        width: 150,
        height: 100,
        float: 'left',
        marginRight: 10,
        cursor: 'pointer'
    },
    datePosted: {
        opacity: 0.8
    },
    title: {
        cursor: 'pointer'
    },
    content: {
        marginLeft: 150,
        paddingBottom: 40
    },
    commentList: {
        width: '100%'
    },
};

export class FeedItem extends React.Component {
    state = {showComments: false, showContent: false,};
    openContent = ()=>{
        this.setState({
            showContent: true,
            showComments: true
        });
    };
    closeContent = ()=>{
        this.setState({
            showContent: false,
            showComments: false
        });
    };
    showComments(){
        if (this.state.showComments) return <CommentsList style={styles.commentList} postId={this.props.postData.id} onClick={(e)=>this.handleClick(e)}/>;
    }
    showContent(){
        if (this.state.showContent) return <FeedItemContent postData={this.props.postData}/>;
    }
    handleClick(e){
        if (e==='collapseComments') {
            if (!this.state.showContent) this.openContent();
            else this.closeContent();
        }
        if (e=='seeAll') {
            window.open('https://www.reddit.com' + this.props.postData.permalink, "_blank");
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card style={styles.card}>
                        <CardMedia
                            style={styles.img}
                            image={this.props.postData.thumbnail}
                            onClick={()=>{this.openContent()}}
                        />
                    <CardContent style={styles.content}>
                            <Typography style={styles.title} onClick={()=>{this.openContent()}}>
                                {this.props.postData.title}
                            </Typography>
                        <Typography style={styles.datePosted}>{moment.utc(this.props.postData.dateUtc).fromNow()}</Typography>
                    </CardContent>
                    <FeedItemMetadata postData={this.props.postData} onClick={(e)=>this.handleClick(e)}/>
                </Card>
                {this.showContent()}
                {this.showComments()}
            </React.Fragment>
        );
    }
}