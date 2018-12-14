import React from 'react';
import Typography from "@material-ui/core/Typography";

const styles = {
    content: {
        maxWidth: '100%',
        // maxHeight: 00,
        objectFit: 'contain',
        backgroundColor: '#1b1b1b'
    },
    title: {
        textAlign: 'center',
        margin: 20
    }
};

export class FeedItemContent extends React.Component {

    componentDidMount() {
        window.addEventListener('popstate',  ()=>{
            console.log('xxx');
        });
    }

    renderContent(postData){
        if (postData.type==='image') return <img src={postData.url} style={styles.content}/>;
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
