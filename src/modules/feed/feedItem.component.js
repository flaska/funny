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
    state = {sshowContent: false,};
    openContent = ()=>{
        this.setState({showContent: true});
    };
    closeContent = ()=>{
        this.setState({showContent: false});
    };
    showContent(){
        if (this.state.showContent) return <FeedItemContent postData={this.props.postData}/>;
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
                    <FeedItemMetadata postData={this.props.postData}/>
                </Card>
                {this.showContent()}
            </React.Fragment>
        );
    }
}