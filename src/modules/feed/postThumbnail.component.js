import React from "react";
import {FaVideo} from 'react-icons/fa';
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
    videoLogo: {
        position: 'absolute',
        right: 0,
        margin: 5,
        color: 'rgb(88, 87, 87)',
        background: '#ffffff',
        padding: 4,
        borderRadius: 3,
        paddingBottom: 0,

    },
    emptyThumbnail: {
        width: 150,
        height: 100,
        backgroundColor: '#e4e4e4'
    }
};


class _PostThumbnail extends React.Component {
    getThumbnail(postData){
        if (postData.thumbnail) return <img src={postData.thumbnail} style={fixCss('width', 120)(styles.img, this.props.width)}  className='postThumbnail' alt={'Thumbnail for post: ' + postData.title}/>;
        else return <div style={styles.emptyThumbnail} style={fixCss('width', 120)(styles.emptyThumbnail, this.props.width)}></div>
    }
    videoLogo(){
        if (this.props.postData.type==='hosted:video') return (<div style={styles.videoLogo}><FaVideo/></div>);
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