import {MdSentimentVerySatisfied, MdFace, MdPhotoCamera} from 'react-icons/md';
import {FaPaw, FaGlobeAmericas, FaHandPaper, FaBookOpen, FaDna, FaClock, FaRegSurprise} from 'react-icons/fa';
import React from 'react';

const styles = {
    icon: {
        zoom: 1.2
    }
};

export function provideIcon(iconName){
    switch(iconName) {
        case 'md_face': return <MdFace style={styles.icon}/>;
        case 'md_sentiment_very_satisfied': return <MdSentimentVerySatisfied style={styles.icon}/>;
        case 'md_photo_camera': return <MdPhotoCamera style={styles.icon}/>;
        case 'fa_paw': return <FaPaw style={styles.icon}/>;
        case 'fa_globe-americas': return <FaGlobeAmericas style={styles.icon}/>;
        case 'fa_hand-paper': return <FaHandPaper style={styles.icon}/>;
        case 'fa_book-open': return <FaBookOpen style={styles.icon}/>;
        case 'fa_dna': return <FaDna style={styles.icon}/>;
        case 'fa_clock': return <FaClock style={styles.icon}/>;
        case 'fa_surprise': return <FaRegSurprise style={styles.icon}/>;
        default: return <div></div>
    }
}