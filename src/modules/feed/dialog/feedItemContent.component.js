import React from 'react';

const styles = {
    content: {
        maxWidth: '100%',
        maxHeight: 500
    }
};

export class FeedItemContent extends React.Component {
    renderContent(postData){
        if (postData.type==='image') return <img src={postData.url} style={styles.content}/>
        if (postData.type==='hosted:video') return <video controls autoPlay src={postData.url} style={styles.content}/>
    }
    render(){
        return(
            <React.Fragment>
                {this.renderContent(this.props.postData)}
            </React.Fragment>
        );
    };
}