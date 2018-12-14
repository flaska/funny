import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {FeedItemMetadata} from './feedItemMetadata.component';
import moment from "moment/moment";
import {CommentsList} from "../comments/commentsList.component";
import {PostDialog} from "./dialog/postDialog.component";

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
    },
    datePosted: {
        opacity: 0.8
    },
    title: {
        textDecoration: 'none'
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
    state = {showComments: false};
    showComments(){
        if (this.state.showComments) return (
            <React.Fragment>
                <CommentsList style={styles.commentList} postId={this.props.postData.id} onClick={(e)=>this.handleClick(e)}/>
            </React.Fragment>
        );
        else return null;
    }
    handleClick(e){
        if (e==='collapseComments') {
            if (!this.state.showComments) this.setState({showComments: true});
            else this.setState({showComments: false});
        }
        if (e=='seeAll') {
            window.open('https://www.reddit.com' + this.props.postData.permalink, "_blank");
        }
    }
    openContent = ()=>{
        this.setState({
            contentOpen: true,
        });
    };
    closeContent = ()=>{
        this.setState({
            contentOpen: false,
        });
    };
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
                            <Typography onClick={()=>{this.openContent()}}>
                                {this.props.postData.title}
                            </Typography>
                        <Typography style={styles.datePosted}>{moment.utc(this.props.postData.dateUtc).fromNow()}</Typography>
                    </CardContent>
                    <FeedItemMetadata postData={this.props.postData} onClick={(e)=>this.handleClick(e)}/>
                </Card>
                {this.showComments(this.state)}
                <PostDialog open={this.state.contentOpen} postData={this.props.postData} onClose={this.closeContent}/>
            </React.Fragment>
        );
    }
}