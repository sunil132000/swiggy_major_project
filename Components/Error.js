import React from 'react';
import { useRouteError } from 'react-router-dom';

export const Error = () => {
    const err = useRouteError();

    return (
        <>
            <div>Error occurred in the routing</div>
            <h1>{err.status}</h1>
            <h1>{err.statusText}</h1>
        </>
    )
}
