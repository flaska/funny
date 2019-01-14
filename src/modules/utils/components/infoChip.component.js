import React from 'react';
import Chip from '@material-ui/core/Chip';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import IconButton from '@material-ui/core/IconButton';
import {FaComments, FaExternalLinkAlt, FaEye, FaEyeSlash} from "react-icons/fa";
import {MdComment, MdThumbUp} from 'react-icons/md';

const styles = {
    chip: {
        margin: 5,
        zoom: 0.85
    },
    iconButton: {
        zoom: 0.85,
        marginLeft: 3
    },
    invisibleText: {
        display: 'none'
    },
    icon: {
        zoom: 1.2
    }
};

function provideIcon(iconName){
    switch(iconName) {
        case 'md_thumb_up': return <MdThumbUp style={styles.icon}/>;
        case 'md_comment': return <MdComment style={styles.icon}/>;
        case 'fa_eye': return <FaEye style={styles.icon}/>;
        case 'fa_external-link-alt': return <FaExternalLinkAlt style={styles.icon}/>;
        case 'fa_eye-slash': return <FaEyeSlash style={styles.icon}/>;
        case 'fa_comments': return <FaComments style={styles.icon}/>;
        default: return <div></div>
    }
}

class _InfoChip extends React.Component {
    render(){
        if (isWidthUp('sm', this.props.width) || !this.props.responsive) return (
            <Chip
                className={this.props.className}
                icon={provideIcon(this.props.icon)}
                color={this.props.color}
                clickable={this.props.clickable}
                label={this.props.children}
                style={styles.chip}
            />
        );
        else return (
            <IconButton  size="small" color={this.props.color} aria-label={this.props.children} style={styles.iconButton}>
                {provideIcon(this.props.icon)}
                <span style={styles.invisibleText}>{this.props.children}</span>
            </IconButton>
        );
    }
}

let InfoChip = withWidth()(_InfoChip);
export {InfoChip};