import React from 'react';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from "moment/moment";
import {PostContent} from "./postContent.component";
import {PostThumbnail} from "./postThumbnail.component";
import {CommentsList} from "../comments/commentsList.component";
import {PostActions} from "./postActions.component";


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
    postActions: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        display: 'inline-block',
    },
    bottomPostActions: {
        float: 'right'
    },
    bottomPostActionsAfter: {
        clear: 'both'
    }
};

export class Post extends React.Component {
    state = {showContent: false, showComments: false};
    toggleContent(){
        if (this.props.postData.type==='link') return this.openLinkUrl(this.props.postData.url);;
        if (this.props.postData.type==='rich:video') return this.openLinkUrl(this.props.postData.url);;
        if (this.state.showContent) this.setState({showContent: false});
        else this.setState({showContent: true});
    }

    toggleComments(){
        if (this.state.showComments) this.setState({showComments: false});
        else this.setState({showComments: true});
    }

    showContent(){
        if (this.state.showContent) return <PostContent postData={this.props.postData} closeContent={()=>this.toggleContent()}/>;
    }

    openLinkUrl(url){
        window.open(url, "_blank");
    }
    openOriginalLink(){
        this.openLinkUrl('https://www.reddit.com/' + this.props.postData.permalink);
    }
    showComments(){
        if (this.state.showComments) return (
            <Card style={styles.commentsCard}>
                <CardContent>
                    <CommentsList style={styles.commentList} postId={this.props.postData.id} onClick={(e)=>this.handleClick(e)}/>
                </CardContent>
            </Card>
        );
    }
    renderPostActions(){
        return <PostActions parentState={this.state} postData={this.props.postData} onCommentsClick={()=>{this.toggleComments()}} onOpenContentClick={()=>{this.toggleContent()}} onOpenSourceClick={()=>{this.openOriginalLink()}}/>
    }
    showBottomActionBar(){
        if (this.state.showComments || this.state.showContent)
        return  (
            <Card className='bottomActionBar'>
                <div style={styles.bottomPostActions}>
                    {this.renderPostActions()}
                </div>
                <div style={styles.bottomPostActions}></div>
            </Card>
        );
    }
    render() {
        return (
            <div className='post'>
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
                    <div style={styles.postActions} className='topActionBar'>
                        {this.renderPostActions()}
                    </div>
                </Card>
                {this.showContent()}
                {this.showComments()}
                {this.showBottomActionBar()}
            </div>
        );
    }
}