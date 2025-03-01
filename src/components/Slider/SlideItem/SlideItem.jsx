import PropTypes from 'prop-types';
import SlideContent from "../SlideContent/SlideContent.jsx";
import s from "./style.module.css"

const SlideItem = ({ slide }) => {
    return (
        <div className={s.slide} style={{backgroundImage: `url(${slide.bg})`}}>
            <SlideContent slide={slide} />
        </div>
    );
};

SlideItem.propTypes = {
    slide: PropTypes.shape({
        bg: PropTypes.string,
    })
}

SlideItem.defaultProps = {
    slide: PropTypes.shape({
        bg: '',
    })
}

export default SlideItem