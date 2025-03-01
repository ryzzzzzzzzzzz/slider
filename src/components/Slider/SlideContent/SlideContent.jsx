import PropTypes from 'prop-types';
import s from "./style.module.css";
import {useState} from "react";
import ModalSlider from "../ModalSlider/ModalSlider.jsx";

const SlideContent = ({ slide, index, goToSecondSlide }) => {
    const [isModalSliderOpen, setIsModalSliderOpen] = useState(false);

    const controlModalSlider = (n) => {
        setIsModalSliderOpen(n)
    }

    return (
        <>
            {/*<h1>{slide.heading}</h1>*/}
            {index === 0 &&
                <div className={s.first}>
                    <h1>{slide.heading}</h1>
                    <h2>{slide.block}</h2>
                    <button className={s.btn} onClick={goToSecondSlide}>
                        <div className={s.arrow}>&rarr;</div>
                        {slide.btn}
                    </button>
                </div>
            }
            {index === 1 &&
                <div className={s.second}>
                    <h1>{slide.heading}</h1>
                    <div className={s.large}>
                        <div className={s.text}>
                            {slide.largeBlock}
                        </div>
                    </div>
                    <div className={s.frame}></div>
                </div>
            }
            {isModalSliderOpen && index === 2 &&
                <ModalSlider controlModalSlider={controlModalSlider}/>
            }
            {index === 2 &&
                <div className={s.third}>
                    <img className={s.bottle} src={slide.bottle} alt="bottle"/>
                    <div className={s.head}>
                        <h1>{isModalSliderOpen ? slide.modal : slide.heading}</h1>
                        <h2>{slide.block}</h2>
                        <div className={s.small}>
                            <p>
                                <img className={s.icon} src={slide.icon1} alt="icon1"/>
                                {slide.smallBlock1}
                            </p>
                            <p>
                                <img className={s.icon} src={slide.icon2} alt="icon2"/>
                                {slide.smallBlock2}
                            </p>
                            <button className={s.btn} onClick={() => controlModalSlider(true)}>
                                <div className={s.arrow}>+</div>
                                {slide.btn}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
};

SlideContent.propTypes = {
    slide: PropTypes.shape({
        heading: PropTypes.string,
        block: PropTypes.node,
        btn: PropTypes.node,
        largeBlock: PropTypes.node,
        smallBlock1: PropTypes.node,
        smallBlock2: PropTypes.node,
        bottle: PropTypes.string,
        icon1: PropTypes.string,
        icon2: PropTypes.string,
        modal: PropTypes.node,
    }),
    index: PropTypes.number,
    goToSecondSlide: PropTypes.func
}

SlideContent.defaultProps = {
    slide: {
        heading: '',
        block: null,
        btn: null,
        largeBlock: null,
        smallBlock1: null,
        smallBlock2: null,
        bottle: '',
        icon1: '',
        icon2: '',
        modal: null
    },
    index: 0
}

export default SlideContent;