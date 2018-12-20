import React from "react";
import ImageLoader from 'react-imageloader';
import { FaImage, FaVideo, FaGrinAlt } from 'react-icons/fa';

const styles = {
    main: {
      float: 'left'
    },
    content: {
        // width: '100%',
        // backgroundColor: '#1b1b1b'
    },
};


export class PostThumbnail extends React.Component {
    getThumbnailIcon(postData){
        if (postData.type === 'image') return <FaImage/>;
        if (postData.type === 'hosted:video') return <FaVideo/>;
        if (postData.type === 'rich:video') return <FaVideo/>;
        if (postData.type === 'link') return <FaGrinAlt/>;
        return <FaGrinAlt/>;
    }
    render() {
        return <ImageLoader src={this.props.postData.thumbnail} imgProps={{style: styles.main}} preloader={()=>this.getThumbnailIcon(this.props.postData)}/>
    };
};