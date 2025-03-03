import s from "./style.module.css"
import PropTypes from "prop-types";
import { useSlider } from '../../hooks/useSlider';
import SlideItem from "./SlideItem/SlideItem.jsx";

const Slider = ({ currentSlide, changeSlide }) => {
    const {
        slideRef,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        slides
    } = useSlider(currentSlide, changeSlide);

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
                    <SlideItem slide={slide} index={index} currentSlide={currentSlide} changeSlide={changeSlide} key={index}/>
                ))}
            </div>
        </div>
    );
};

Slider.propTypes = {
    currentSlide: PropTypes.number.isRequired,
    changeSlide: PropTypes.func.isRequired
}

export default Slider;