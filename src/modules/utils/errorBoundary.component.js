import React from 'react';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, info) {
        console.error(error);
        console.log(info);
    }

    render() {
        if (this.state.hasError) {
            return (<div> <SentimentDissatisfiedIcon /> {this.props.fallback}</div>);
        }
        return this.props.children;
    }
}