import PropTypes from 'prop-types';
import SlideContent from "../SlideContent/SlideContent.jsx";
import s from "./style.module.css"

const SlideItem = ({ slide, index, goToSecondSlide }) => {
    return (
        <div
            className={s.slide}
            style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: index !== 2 ? 'cover' : '',
            }}
        >
            <SlideContent slide={slide} index={index} goToSecondSlide={goToSecondSlide}/>
        </div>
    );
};

SlideItem.propTypes = {
    slide: PropTypes.shape({
        bg: PropTypes.string,
    }),
    index: PropTypes.number.isRequired,
    goToSecondSlide: PropTypes.func
}

SlideItem.defaultProps = {
    slide: PropTypes.shape({
        bg: '',
    }),
    index: 0
}

export default SlideItem