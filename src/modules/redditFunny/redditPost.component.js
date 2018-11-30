import React from 'react';

export class RedditPost extends React.Component {
    state = {title: this.props.postData.title}
    render() {
        return (
            <div>{this.state.title}</div>
        );
    }
}