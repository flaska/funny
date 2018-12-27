import React from 'react';
import Typography from "@material-ui/core/Typography";
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

export default function LazyLoadError(props) {
    return (<div><SentimentDissatisfiedIcon/><Typography>{props.message}</Typography></div>);
}