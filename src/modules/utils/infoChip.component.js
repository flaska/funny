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

export class InfoChip extends React.Component {
    getIcon(icon){
        if (icon === 'like') return <ThumbUpIcon/>;
        if (icon === 'comment') return <CommentIcon/>;
        if (icon === 'face') return <FaceIcon/>;
        return <div></div>
    }    

    render(){
        return (
            <Chip
                icon={this.getIcon(this.props.icon)}
                color={this.props.color}
                clickable={this.props.clickable}
                label={this.props.children}
                style={styles.main}
            />
        );
    }
}