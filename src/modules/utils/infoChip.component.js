import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


export class InfoChip extends React.Component {
    render(){
        return (
            <Chip
                avatar={
                    <Avatar>
                        <ThumbUpIcon />
                    </Avatar>
                }
                label={this.props.content}
            />
        );
    }
}