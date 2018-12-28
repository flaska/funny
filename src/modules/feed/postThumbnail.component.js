import React from "react";
import { FaImage, FaVideo, FaGrinAlt } from 'react-icons/fa';
import withWidth from "@material-ui/core/withWidth/index";
import fixCss from '../utils/functions/fixCss.function';
import {InfoChip} from "../utils/components/infoChip.component";

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
        if (postData.type === 'rich:video') return <FaVideo style={styles.icon}/>;
        if (postData.type === 'link') return <FaGrinAlt style={styles.icon}/>;
        return <FaGrinAlt style={styles.icon}/>;
    }

    getThumbnail(postData){
        if (postData.thumbnail) return <img src={postData.thumbnail} style={fixCss('width', 120)(styles.img, this.props.width)}  className='postThumbnail'/>
    }
    externalWatermark(){
        if (this.props.postData.type==='link') return (<div style={styles.external}><InfoChip icon='fa_external-link-alt'>External</InfoChip></div>);
    }
    render() {
        return (
            <div style={styles.main} onClick={()=>this.props.onClick()}>
                {this.externalWatermark()}
                {this.getThumbnail(this.props.postData)}
            </div>
        );
    };
};


let PostThumbnail = withWidth()(_PostThumbnail);
export {PostThumbnail};