import PropTypes from 'prop-types';
import SlideContent from "../SlideContent/SlideContent.jsx";
import s from "./style.module.css"

const SlideItem = ({ slide, index, currentSlide, changeSlide }) => {
    return (
        <div
            className={s.slide}
            style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: index !== 2 ? 'cover' : '',
            }}
        >
            <SlideContent slide={slide} index={index} currentSlide={currentSlide} goToSecondSlide={changeSlide}/>
        </div>
    );
};

SlideItem.propTypes = {
    slide: PropTypes.shape({
        bg: PropTypes.string,
    }),
    index: PropTypes.number.isRequired,
    currentSlide: PropTypes.number.isRequired,
    changeSlide: PropTypes.func
}

SlideItem.defaultProps = {
    slide: PropTypes.shape({
        bg: '',
    }),
    index: 0,
    currentSlide: 0
}

export default SlideItem