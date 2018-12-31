import React from "react";
import {FaImage, FaVideo} from 'react-icons/fa';
import withWidth from "@material-ui/core/withWidth/index";
import fixCss from '../utils/functions/fixCss.function';

const styles = {
    main: {
        float: 'left',
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative'
    },
    img: {
        width: 150
    },
    icon: {
        zoom: 4,
        margin: 10,
        opacity: 0.1
    },
    external: {
        position: 'absolute',
        right: 0
    }
};


class _PostThumbnail extends React.Component {
    getThumbnailIcon(postData){
        if (postData.type === 'image') return <FaImage style={styles.icon}/>;
        if (postData.type === 'hosted:video') return <FaVideo style={styles.icon}/>;
    }

    getThumbnail(postData){
        if (postData.thumbnail) return <img src={postData.thumbnail} style={fixCss('width', 120)(styles.img, this.props.width)}  className='postThumbnail'/>
    }
    videoLogo(){
        if (this.props.postData.type==='hosted:video') return (<div style={styles.external}><FaVideo/></div>);
    }
    render() {
        return (
            <div style={styles.main} onClick={()=>this.props.onClick()}>
                {this.videoLogo()}
                {this.getThumbnail(this.props.postData)}
            </div>
        );
    };
};


let PostThumbnail = withWidth()(_PostThumbnail);
export {PostThumbnail};