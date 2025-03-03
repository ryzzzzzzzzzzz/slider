import { getDirection } from '../utils/scrollUtils';

export const useSliderEvents = (
    touchStartX,
    setTouchStartX,
    setIsDragging,
    isDragging,
    isChangingSlide,
    switchSlide,
    preventScroll
) => {
    const handleMouseDown = (e) => {
        setTouchStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isChangingSlide) return;
        const currentX = e.clientX;
        const diffX = currentX - touchStartX;

        if (!isChangingSlide && Math.abs(diffX) > 100) {
            const direction = getDirection(diffX);
            switchSlide(direction);
            setTouchStartX(currentX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        preventScroll.current = true;
        setTouchStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || isChangingSlide) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - touchStartX;

        if (!isChangingSlide && Math.abs(diffX) > 100) {
            const direction = getDirection(diffX);
            switchSlide(direction);
            setTouchStartX(currentX);
        }
    };

    const handleTouchEnd = () => {
        preventScroll.current = false;
        setIsDragging(false);
    };

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    };
};