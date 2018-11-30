import React from 'react';

export class RedditPost extends React.Component {
    state = {title: this.props.postData.title, url: this.props.postData.url}
    render() {
        return (
            <div>
                <a href={this.state.url} target='_blank'>
                    {this.state.title}
                </a>
            </div>
        );
    }
}