import PropTypes from 'prop-types';
import s from "./style.module.css";
import {useState} from "react";

const SlideContent = ({ slide, index, goToSecondSlide }) => {
    const [isModalSliderOpen, setIsModalSliderOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const controlModalSlider = (status) => {
        setIsModalSliderOpen(status)
    }

    const leftSlide = () => {
        setCurrentSlide(1)
    }

    const rightSlide = () => {
        setCurrentSlide(0)
    }

    return (
        <>
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
            {index === 2 &&
                <div className={isModalSliderOpen ? s.overlay : ''}>
                    <div className={s.third}>
                        <img className={s.bottle} src={slide.bottle} alt="bottle"/>
                        <div>
                            <h1>{isModalSliderOpen ? slide.modal : slide.heading}</h1>
                            <h2>{slide.block}</h2>
                            {isModalSliderOpen ? (
                                    <div className={s.mslider}>
                                        <div  className={isModalSliderOpen ? s.modal : ''}>
                                        <div className={s.close} onClick={() => controlModalSlider(false)}>×</div>
                                            <ol className={s.left} style={{display: currentSlide === 1 ? 'none' : ''}}>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                                <li>Faucibus pulvinar elementum integer enim</li>
                                                <li>Faucibus pulvinar elementum integer enim</li>
                                            </ol>
                                            <ol className={s.right} style={{display: currentSlide === 0 ? 'none' : ''}}>
                                                <li>Mi bibendum neque egestas congue quisque</li>
                                                <li>Venenatis lectus magna fringilla urna</li>
                                                <li>Venenatis lectus magna fringilla urna</li>
                                            </ol>
                                            <div className={s.nav}>
                                                <div className={s.marrow} onClick={rightSlide}>&#60;</div>
                                                <div className={`${s.dot} ${currentSlide === 0 ? s.active : ''}`}
                                                     onClick={leftSlide}></div>
                                                <div className={`${s.dot} ${currentSlide === 1 ? s.active : ''}`} onClick={rightSlide}></div>
                                            <div className={s.marrow} onClick={leftSlide}>&#62;</div>
                                        </div>
                                    </div>
                                    </div>
                                )
                                : (
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
                                )
                            }
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