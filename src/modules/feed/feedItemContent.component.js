import React from 'react';
import ImageLoader from 'react-imageloader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "@material-ui/core/Card";
import {CommentsList} from "../comments/commentsList.component";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import ForwardIcon from "@material-ui/icons/Forward";
import { FaTimes } from 'react-icons/fa';

const styles = {
    content: {
        width: '100%',
        backgroundColor: '#1b1b1b'
    },
    spinner: {
        margin: '30px auto',
        display: 'block',
    },
    buttons: {float: 'right'}
};

export class FeedItemContent extends React.Component {

    renderContent(postData){
        if (postData.type==='image') return <ImageLoader src={postData.url} imgProps={{style:styles.content}} preloader={()=><CircularProgress style={styles.spinner}/>}/>;
        if (postData.type==='hosted:video') return <video controls autoPlay src={postData.url} style={styles.content}/>;
        if (postData.type==='rich:video') return <video controls autoPlay src={postData.url} style={styles.content}/>;
    }

    openOriginalUrl(){
        window.open('https://www.reddit.com' + this.props.postData.permalink, "_blank");
    }

    render(){
        return(
            <Card>
                {this.renderContent(this.props.postData)}
                <CardContent>
                    <CommentsList style={styles.commentList} postId={this.props.postData.id} onClick={(e)=>this.handleClick(e)}/>
                    <div style={styles.buttons}>
                        <Button color="primary" onClick={()=>this.openOriginalUrl()}>
                            More
                            <ForwardIcon/>
                        </Button>
                        <Button onClick={()=>this.props.closeContent()} color='secondary'>
                            Close
                            <FaTimes/>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        );
    };
}
