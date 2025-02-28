import {useEffect, useRef} from 'react';

const usePreventScroll = () => {
    const preventScroll = useRef(false);

    useEffect(() => {
        const handleTouchMove = (e) => {
            if (preventScroll.current) {
                e.preventDefault();
            }
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
        };
    }, );

    return preventScroll;
};

export default usePreventScroll;