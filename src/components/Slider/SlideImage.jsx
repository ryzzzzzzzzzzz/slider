import PropTypes from 'prop-types';
import s from "./slideItemsStyle.module.css"

const SlideImage = ({ img }) => {
    const {src, alt} = img
    return (
        <div className={s.slide}>
            <img
                className={s.img}
                src={src}
                alt={alt}
            />
        </div>
    )
};

SlideImage.propTypes = {
    img: PropTypes.string.isRequired
};

SlideImage.defaultProps = {
    img: ''
};

export default SlideImage;