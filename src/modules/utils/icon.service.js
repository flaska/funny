import {MdSentimentVerySatisfied, MdFace, MdPhotoCamera, MdComment, MdThumbUp} from 'react-icons/md';
import {FaPaw, FaFlask} from 'react-icons/fa';
import React from 'react';

const styles = {
    icon: {
        zoom: 1.2
    }
};

export function provideIcon(iconName){
    if (iconName === 'md_thumb_up') return <MdThumbUp style={styles.icon}/>;
    if (iconName === 'md_comment') return <MdComment style={styles.icon}/>;
    if (iconName === 'md_face') return <MdFace style={styles.icon}/>;
    if (iconName === 'md_sentiment_very_satisfied') return <MdSentimentVerySatisfied style={styles.icon}/>;
    if (iconName === 'md_photo_camera') return <MdPhotoCamera style={styles.icon}/>;
    if (iconName === 'fa_paw') return <FaPaw style={styles.icon}/>;
    if (iconName === 'fa_flask') return <FaFlask style={styles.icon}/>;
    return <div></div>;
}