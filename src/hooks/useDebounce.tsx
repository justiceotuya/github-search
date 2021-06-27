import React, { useEffect, useRef } from 'react';
import useIsMounted from './useIsMounted';

export const useDebounce = ( callback: () => void,
    delay: number,
    deps: any[],): void => {

    const isMounted = useIsMounted()

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        const handler = setTimeout(() => {
           if (isMounted) callback();
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [delay, ...deps,]);
};

export default useDebounce;
