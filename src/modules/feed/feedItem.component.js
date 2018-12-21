import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {FeedItemMetadata} from './feedItemMetadata.component';
import moment from "moment/moment";
import {FeedItemContent} from "./feedItemContent.component";
import {PostThumbnail} from "./postThumbnail.component";

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
    }
};

export class FeedItem extends React.Component {
    state = {showContent: false,};
    toggleContent(){
        if (this.props.postData.type==='link') return this.openLinkUrl(this.props.postData.url);;
        if (this.props.postData.type==='rich:video') return this.openLinkUrl(this.props.postData.url);;
        if (this.state.showContent) this.setState({showContent: false});
        else this.setState({showContent: true});
    }
    showContent(){
        if (this.state.showContent) return <FeedItemContent postData={this.props.postData} closeContent={()=>this.toggleContent()}/>;
    }

    openLinkUrl(url){
        window.open(url, "_blank");
    }
    render() {
        return (
            <div className='feedItem'>
                <Card style={styles.card}>
                    <CardMedia
                        style={styles.img}
                        component={()=><PostThumbnail postData={this.props.postData} onClick={()=>{this.toggleContent()}}/>}
                        src='img'
                        onClick={()=>{this.toggleContent()}}
                    />
                    <CardContent style={styles.content}>
                            <Typography style={styles.title} onClick={()=>{this.toggleContent()}} className='postTitle'>
                                {this.props.postData.title}
                            </Typography>
                        <Typography style={styles.datePosted}>{moment.utc(this.props.postData.dateUtc).fromNow()}</Typography>
                    </CardContent>
                    <FeedItemMetadata onCommentsClick={()=>{this.setState({showContent: true})}} postData={this.props.postData}/>
                </Card>
                {this.showContent()}
            </div>
        );
    }
}