import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    WhatsappShareButton,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';

const styles = {
    button: {
        display: 'inline-block',
        cursor: 'pointer',
        margin: 5
    }
};

export default function(props){
    return (
        <div>
            <FacebookShareButton url={props.url} quote={props.text} style={styles.button}>
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={props.url} title={props.text} style={styles.button}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <WhatsappShareButton url={props.url} title={props.text} style={styles.button}>
                <WhatsappIcon size={32} round/>
            </WhatsappShareButton>
        </div>
    );
}