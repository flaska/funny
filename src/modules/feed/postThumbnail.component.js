import React from "react";
import { FaImage, FaVideo, FaGrinAlt } from 'react-icons/fa';

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


export class PostThumbnail extends React.Component {
    getThumbnailIcon(postData){
        if (postData.type === 'image') return <FaImage style={styles.icon}/>;
        if (postData.type === 'hosted:video') return <FaVideo style={styles.icon}/>;
        if (postData.type === 'rich:video') return <FaVideo style={styles.icon}/>;
        if (postData.type === 'link') return <FaGrinAlt style={styles.icon}/>;
        return <FaGrinAlt style={styles.icon}/>;
    }
    getThumbnail(postData){
        if (postData.thumbnail) return <img src={postData.thumbnail} style={styles.img} />
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