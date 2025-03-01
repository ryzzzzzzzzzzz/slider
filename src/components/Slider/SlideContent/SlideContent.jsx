import PropTypes from 'prop-types';
import s from "./style.module.css";

const SlideContent = ({ slide }) => {
    return (
        <div className={s.content}>
            <div className={s.blocks}>
                {slide.smallBlock1 ?
                    <div className={s.bottleSlide}>
                        <img className={s.bottle} src={slide.bottle} alt="bottle"/>
                        <div className={s.bottleText}>
                            <h1>{slide.heading}</h1>
                            <h2>{slide.block}</h2>
                            <div className={s.smallBlocks}>
                                <p>{slide.smallBlock1}</p>
                                <p>{slide.smallBlock2}</p>
                            </div>
                        </div>
                    </div>
                    : <div>
                        <h1>{slide.heading}</h1>
                        <h2>{slide.block}</h2>
                    </div>
                }
                {slide.btn &&
                    <button className={s.btn}>
                        <div className={s.arrow}>&rarr;</div>
                        <span>{slide.btn}</span></button>
                }
                {slide.largeBlock &&
                    <div className={s.largeBlock}>
                        <div className={s.text}>
                            {slide.largeBlock}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

SlideContent.propTypes = {
    slide: PropTypes.shape({
        heading: PropTypes.string,
        block: PropTypes.string,
        btn: PropTypes.string,
        largeBlock: PropTypes.string,
        smallBlock1: PropTypes.string,
        smallBlock2: PropTypes.string,
        bottle: PropTypes.string
    })
}

SlideContent.defaultProps = {
    slide: PropTypes.shape({
        heading: '',
        block: '',
        btn: '',
        largeBlock: '',
        smallBlock1: '',
        smallBlock2: '',
        bottle: '',
    })
}

export default SlideContent;