import {MdThumbUp} from 'react-icons/md';
import {MdComment} from 'react-icons/md';
import {MdFace} from 'react-icons/md';
import {MdPhotoCamera} from 'react-icons/md';
import {MdSentimentVerySatisfied} from 'react-icons/md';
import { FaPaw } from 'react-icons/fa';
import React from 'react';

const styles = {
    icon: {
        zoom: 1.2
    }
};

export function provideIcon(iconName){
    if (iconName === 'like') return <MdThumbUp style={styles.icon}/>;
    if (iconName === 'comment') return <MdComment style={styles.icon}/>;
    if (iconName === 'face') return <MdFace style={styles.icon}/>;
    if (iconName === 'sentiment_very_satisfied') return <MdSentimentVerySatisfied style={styles.icon}/>;
    if (iconName === 'photo_camera') return <MdPhotoCamera style={styles.icon}/>;
    if (iconName === 'fa_paw') return <FaPaw style={styles.icon}/>;
    return <div></div>;
}