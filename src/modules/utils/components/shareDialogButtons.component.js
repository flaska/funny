import React from 'react';
import {FacebookShareButton, FacebookIcon} from 'react-share';

export default function(props){
    return (
        <FacebookShareButton url={props.postData.url} quote={props.postData.title}>
            <FacebookIcon
                size={32}
                round />
        </FacebookShareButton>
    );
}