import React, {Suspense} from 'react';
import ErrorBoundary from "./errorBoundary.component";

export default function LazyLoad(props) {
    return (
        <ErrorBoundary fallback={props.errorFallback}>
            <Suspense fallback={props.loadingFallback}>
                {props.children}
            </Suspense>
        </ErrorBoundary>
    );
}