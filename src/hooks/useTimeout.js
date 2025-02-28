import {useEffect, useRef} from "react";

const useTimeout = (callback, delay) => {
    const timeoutRef = useRef();

    useEffect(() => {
        const id = setTimeout(callback, delay);
        timeoutRef.current = id;
        return () => clearTimeout(timeoutRef.current);
    }, [callback, delay]);
};

export default useTimeout