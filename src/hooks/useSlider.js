import { useEffect, useRef, useState } from 'react';
import usePreventScroll from './usePreventScroll';
import { handleScroll } from '../utils/scrollUtils';
import { calculateNewIndex } from '../utils/sliderUtils';
import { useSliderEvents } from '../events/useSliderEvents';
import { SlidesData } from '../data/SlidesData';

export const useSlider = (currentSlide, changeSlide) => {
    const slideRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isChangingSlide, setIsChangingSlide] = useState(false);
    const preventScroll = usePreventScroll();

    const slides = SlidesData();

    useEffect(() => {
        document.body.addEventListener('touchmove', handleScroll, { passive: false });
        document.body.addEventListener('mousemove', handleScroll, { passive: false });

        return () => {
            document.body.removeEventListener('touchmove', handleScroll);
            document.body.removeEventListener('mousemove', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    const switchSlide = (newSlide) => {
        setIsChangingSlide(true);
        setTimeout(() => {
            const newIndex = calculateNewIndex(currentSlide, newSlide, slides.length);
            if (newIndex >= 0 && newIndex < slides.length) {
                changeSlide(newIndex);
            }
            setIsChangingSlide(false);
        }, 200);
    };

    const {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd
    } = useSliderEvents(
        touchStartX,
        setTouchStartX,
        setIsDragging,
        isDragging,
        isChangingSlide,
        switchSlide,
        preventScroll
    );

    return {
        slideRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        slides
    };
};