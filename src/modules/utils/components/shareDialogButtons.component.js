import React from 'react';
import {FacebookShareButton, FacebookIcon} from 'react-share';

export default function(props){
    return (
        <FacebookShareButton url={props.url} quote={props.text}>
            <FacebookIcon
                size={32}
                round />
        </FacebookShareButton>
    );
}