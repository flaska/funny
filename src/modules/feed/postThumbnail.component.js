import React from "react";
import { FaImage, FaVideo, FaGrinAlt } from 'react-icons/fa';
import withWidth, {isWidthUp} from "@material-ui/core/withWidth/index";

const styles = {
    main: {
        float: 'left',
        cursor: 'pointer',
        width: 150,
        textAlign: 'center'
    },
    img: {
        width: 150
    },
    icon: {
        zoom: 4,
        marginTop: 5,
        opacity: 0.5
    }
};


class _PostThumbnail extends React.Component {
    getThumbnailIcon(postData){
        if (postData.type === 'image') return <FaImage style={styles.icon}/>;
        if (postData.type === 'hosted:video') return <FaVideo style={styles.icon}/>;
        if (postData.type === 'rich:video') return <FaVideo style={styles.icon}/>;
        if (postData.type === 'link') return <FaGrinAlt style={styles.icon}/>;
        return <FaGrinAlt style={styles.icon}/>;
    }

    fixWidth(style){
        if(isWidthUp('sm', this.props.width)) return style;
        else {
            let s = {...style};
            s.width = 120;
            return s;
        }
    }

    getThumbnail(postData){
        if (postData.thumbnail) return <img src={postData.thumbnail} style={this.fixWidth(styles.img)} />
        if (!postData.thumbnail) return this.getThumbnailIcon(postData)
    }
    render() {
        return (
            <div style={styles.main} onClick={()=>this.props.onClick()}>
                {this.getThumbnail(this.props.postData)}
            </div>
        );
    };
};


let PostThumbnail = withWidth()(_PostThumbnail);
export {PostThumbnail};