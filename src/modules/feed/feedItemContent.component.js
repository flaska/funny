import React from 'react';
import ImageLoader from 'react-imageloader';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    content: {
        width: '100%',
        backgroundColor: '#1b1b1b'
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
                {this.renderContent(this.props.postData)}
            </React.Fragment>
        );
    };
}
