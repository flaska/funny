import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import FaceIcon from '@material-ui/icons/Face';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import React from 'react';

export function provideIcon(iconName){
    if (iconName === 'like') return <ThumbUpIcon/>;
    if (iconName === 'comment') return <CommentIcon/>;
    if (iconName === 'face') return <FaceIcon/>;
    if (iconName === 'sentiment_very_satisfied') return <SentimentVerySatisfiedIcon/>;
    if (iconName === 'photo_camera') return <PhotoCameraIcon/>;

    return <div></div>;
}