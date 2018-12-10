import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import FaceIcon from '@material-ui/icons/Face';

const styles = {
  main: {
      margin: 5,
      zoom: 0.85
  }
};

function Icon(props){
    if (props.icon === 'like') return <ThumbUpIcon/>;
    if (props.icon === 'comment') return <CommentIcon/>;
    if (props.icon === 'face') return <FaceIcon/>;
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
                label={this.props.children}
                style={styles.main}
            />
        );
    }
}