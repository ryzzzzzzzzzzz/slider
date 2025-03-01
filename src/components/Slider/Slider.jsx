import s from "./style.module.css"
import {useEffect, useRef, useState} from "react";
import usePreventScroll from "../../hooks/usePreventScroll.js"
import {SlidesData} from "../../data/SlidesData.jsx"
import SlideItem from "./SlideItem/SlideItem.jsx";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isChangingSlide, setIsChangingSlide] = useState(false);
    const preventScroll = usePreventScroll();

    const slides = SlidesData()

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
        };
        document.body.addEventListener('touchmove', handleScroll, {passive: false});
        document.body.addEventListener('mousemove', handleScroll, {passive: false});

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

    const changeSlide = (newSlide) => {
        setIsChangingSlide(true);
        setTimeout(() => {
            const newIndex = (currentSlide + newSlide + slides.length) % slides.length;
            if (newIndex >= 0 && newIndex < slides.length) {
                setCurrentSlide(newIndex);
            }
            setIsChangingSlide(false);
        }, 200);
    };

    const handleMouseDown = (e) => {
        setTouchStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isChangingSlide) return;
        const currentX = e.clientX;
        const diffX = currentX - touchStartX;

        if (!isChangingSlide && Math.abs(diffX) > 100) {
            const direction = diffX > 0 ? -1 : 1;
            changeSlide(direction);
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
            const direction = diffX > 0 ? -1 : 1;
            changeSlide(direction);
            setTouchStartX(currentX);
        }
    };

    const handleTouchEnd = () => {
        preventScroll.current = false;
        setIsDragging(false);
    };

    const goToSecondSlide = () => {
        setCurrentSlide(1)
    }

    return (
        <div className={s.slider}>
            <div
                ref={slideRef}
                className={s.slides}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <SlideItem slide={slide} index={index} goToSecondSlide={goToSecondSlide} key={index}/>
                ))}
            </div>
        </div>
    );
};

export default Slider;