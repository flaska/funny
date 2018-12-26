import {MdSentimentVerySatisfied, MdFace, MdPhotoCamera, MdComment, MdThumbUp} from 'react-icons/md';
import {FaPaw, FaFlask, FaGamepad, FaLightbulb, FaVideo, FaFilm, FaGlobeAmericas, FaEye, FaExternalLinkAlt, FaEyeSlash, FaComments} from 'react-icons/fa';
import React from 'react';

const styles = {
    icon: {
        zoom: 1.2
    }
};

export function provideIcon(iconName){
    switch(iconName) {
        case 'md_thumb_up': return <MdThumbUp style={styles.icon}/>;
        case 'md_comment': return <MdComment style={styles.icon}/>;
        case 'md_face': return <MdFace style={styles.icon}/>;
        case 'md_sentiment_very_satisfied': return <MdSentimentVerySatisfied style={styles.icon}/>;
        case 'md_photo_camera': return <MdPhotoCamera style={styles.icon}/>;
        case 'fa_paw': return <FaPaw style={styles.icon}/>;
        case 'fa_flask': return <FaFlask style={styles.icon}/>;
        case 'fa_gamepad': return <FaGamepad style={styles.icon}/>;
        case 'fa_lightbulb': return <FaLightbulb style={styles.icon}/>;
        case 'fa_video': return <FaVideo style={styles.icon}/>;
        case 'fa_film': return <FaFilm style={styles.icon}/>;
        case 'fa_globe_americas': return <FaGlobeAmericas style={styles.icon}/>;
        case 'fa_eye': return <FaEye style={styles.icon}/>;
        case 'fa_external-link-alt': return <FaExternalLinkAlt style={styles.icon}/>;
        case 'fa_eye-slash': return <FaEyeSlash style={styles.icon}/>;
        case 'fa_comments': return <FaComments style={styles.icon}/>;
    }

    return <div></div>;
}