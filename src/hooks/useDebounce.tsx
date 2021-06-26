import React, { useEffect, useRef } from 'react';

export const useDebounce = ( callback: () => void,
    delay: number,
    deps: any[],): void => {

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const handler = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [delay, ...deps,]);
};

export default useDebounce;
