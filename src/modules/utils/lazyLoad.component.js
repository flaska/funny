import React, {Suspense} from 'react';
import ErrorBoundary from "./errorBoundary.component";

export default class LazyLoad extends React.Component {
    render() {
        return (
            <ErrorBoundary fallback={this.props.errorFallback}>
                <Suspense fallback={this.props.loadingFallback}>
                    {this.props.children}
                </Suspense>
            </ErrorBoundary>
        );
    }
}