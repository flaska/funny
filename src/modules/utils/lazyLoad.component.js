import React from 'react';

export default class LazyLoad extends React.Component {
    render() {
        return (
            this.props.children
        );
    }
}