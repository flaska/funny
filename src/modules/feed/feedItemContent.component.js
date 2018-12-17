import React from 'react';
import ImageLoader from 'react-imageloader';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from "@material-ui/core/Typography";

const styles = {
    content: {
        maxWidth: '100%',
        objectFit: 'contain',
        backgroundColor: '#1b1b1b'
    },
    title: {
        textAlign: 'center',
        margin: 20
    },
    spinner: {
        margin: '30px auto',
        display: 'block',
    }
};

export class FeedItemContent extends React.Component {

    renderContent(postData){
        if (postData.type==='image') return <ImageLoader src={postData.url} imgProps={{style:styles.content}} preloader={()=><CircularProgress style={styles.spinner}/>}/>;
        if (postData.type==='hosted:video') return <video controls autoPlay src={postData.url} style={styles.content}/>;
        if (postData.type==='link') return <embed src={postData.url} style={styles.content}/>;
    }
    render(){
        return(
            <React.Fragment>
                <Typography style={styles.title}>{this.props.postData.title}</Typography>
                {this.renderContent(this.props.postData)}
            </React.Fragment>
        );
    };
}
