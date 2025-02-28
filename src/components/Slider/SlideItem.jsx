import SlideImage from "./SlideImage.jsx";
import SlideContent from "./SlideContent.jsx";
import PropTypes from 'prop-types';

const SlideItem = ({ data }) => {
    return (
        <div>
            <SlideImage
                img={data.img}
            />
            <SlideContent
                content={data.content}
            />
        </div>
    );
};

SlideItem.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.node.isRequired,
        content: PropTypes.node.isRequired
    }).isRequired
};

SlideItem.defaultProps = {
    data: {
        img: null,
        content: null
    }
};

export default SlideItem;