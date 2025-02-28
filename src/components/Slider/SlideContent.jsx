import PropTypes from 'prop-types';
import s from "./slideItemsStyle.module.css"

const SlideContent = ({content}) => {
    const {heading, text, block1, block2} = content
    return (
        <div>
            {/*<h1>{heading}</h1>*/}
            {/*<p>{text}</p>*/}
            {/*<div>*/}
            {/*    <p>{block1}</p>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <p>{block2}</p>*/}
            {/*</div>*/}
        </div>
    )
}

SlideContent.propTypes = {
    content: PropTypes.string.isRequired
};

SlideContent.defaultProps = {
    content: ''
};

export default SlideContent;