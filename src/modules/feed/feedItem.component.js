import React from 'react';
import Typography from "@material-ui/core/Typography";

export class FeedItem extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.postData.url} target='_blank'>
                    <img src={this.props.postData.thumbnail}/>
                    <Typography>
                        {this.props.postData.title}
                    </Typography>
                </a>
            </div>
        );
    }
}