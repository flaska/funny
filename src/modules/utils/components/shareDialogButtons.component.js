import React from 'react';
import {FacebookShareButton, FacebookIcon} from 'react-share';

export default function(props){
    console.log(props.url);
    console.log(props.text);
    return (
        <FacebookShareButton url={props.url} quote={props.text}>
            <FacebookIcon
                size={32}
                round />
        </FacebookShareButton>
    );
}