import React from 'react';

export class FeedItemContent extends React.Component {
    render(){
        return(
            <React.Fragment>
                <img src={this.props.postData.url}/>
            </React.Fragment>
        );
    };
}