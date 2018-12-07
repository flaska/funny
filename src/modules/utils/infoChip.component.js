import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';

const styles = {
  main: {
      margin: 5
  }
};

function Icon(props){
    if (props.icon === 'like') return <ThumbUpIcon/>;
    if (props.icon === 'comment') return <CommentIcon/>;
    return <div></div>
}

export class InfoChip extends React.Component {
    render(){
        return (
            <Chip
                avatar={
                    <Avatar>
                        <Icon icon={this.props.icon}></Icon>
                    </Avatar>
                }
                label={this.props.content}
                style={styles.main}
            />
        );
    }
}