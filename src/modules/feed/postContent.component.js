import React from 'react';
import ImageLoader from 'react-imageloader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from "@material-ui/core/Card";

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

export class PostContent extends React.Component {

    renderContent(postData){
        if (postData.type==='image') return <ImageLoader src={postData.url} imgProps={{style:styles.content}} preloader={()=><CircularProgress style={styles.spinner}/>}/>;
        if (postData.type==='hosted:video') return <video controls autoPlay src={postData.url} style={styles.content}/>;
    }

    openOriginalUrl(){
        window.open('https://www.reddit.com' + this.props.postData.permalink, "_blank");
    }

    render(){
        return(
            <Card className='postContent'>
                {this.renderContent(this.props.postData)}
            </Card>
        );
    };
}
