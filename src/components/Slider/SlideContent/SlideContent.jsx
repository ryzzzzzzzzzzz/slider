import PropTypes from 'prop-types';
import s from "./style.module.css";
import {useState} from "react";
import pinkSperm from "../../../data/img/pinkSperm.png"
import pinkSpermBlock from "../../../data/img/pinkSpermBlock.png"
import * as Bakti from "../../../data/img/bakti/index.js"
import * as Bubble from "../../../data/img/bubbles/index.js"


const SlideContent = ({ slide, index, currentSlide, goToSecondSlide }) => {
    const [isModalSliderOpen, setIsModalSliderOpen] = useState(false);
    const [currentModalSlide, setCurrentModalSlide] = useState(0);

    const controlModalSlider = (status) => {
        setIsModalSliderOpen(status)
    }

    const leftSlide = () => {
        setCurrentModalSlide(1)
    }

    const rightSlide = () => {
        setCurrentModalSlide(0)
    }

    return (
        <>
            {index === 0 &&
                <div className={s.first}>
                    <img className={s.pinkSperm} src={pinkSperm} alt="pink_sperm"/>
                    <img className={s.bakti1} src={Bakti.bakti1} alt="bakti1"/>
                    <img className={s.bakti2} src={Bakti.bakti2} alt="bakti2"/>
                    <img className={s.bakti3} src={Bakti.bakti3} alt="bakti3"/>
                    <img className={s.bakti4} src={Bakti.bakti4} alt="bakti4"/>
                    <h1>{slide.heading}</h1>
                    <h2>{slide.block}</h2>
                    <button className={s.btn} onClick={() => goToSecondSlide(1)}>
                        <div className={s.arrow}>&rarr;</div>
                        {slide.btn}
                    </button>
                </div>
            }
            {index === 1 &&
                <div className={s.second}>
                    <img className={`${s.pinkSpermBlock} ${currentSlide === 1 ? s.animated : ''}`} src={pinkSpermBlock} alt="pinkSpermBlock"/>
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
                        <img className={s.bubble1} src={Bubble.bubble1} alt="bubble1"/>
                        <img className={s.bubble2} src={Bubble.bubble2} alt="bubble2"/>
                        <img className={s.bubble3} src={Bubble.bubble3} alt="bubble3"/>
                        <img className={s.bubble4} src={Bubble.bubble4} alt="bubble4"/>
                        <img className={s.bubble5} src={Bubble.bubble5} alt="bubble5"/>
                        <img className={s.bubble6} src={Bubble.bubble6} alt="bubble6"/>
                        <img className={s.bubble7} src={Bubble.bubble7} alt="bubble7"/>
                        <img className={s.bubble8} src={Bubble.bubble8} alt="bubble8"/>
                        <div>
                            <h1>{isModalSliderOpen ? slide.modal : slide.heading}</h1>
                            <h2>{slide.block}</h2>
                            {isModalSliderOpen ? (
                                    <div className={s.mslider}>
                                        <div className={isModalSliderOpen ? s.modal : ''}>
                                            <div className={s.close} onClick={() => controlModalSlider(false)}>×</div>
                                            <ol className={s.left} style={{display: currentModalSlide === 1 ? 'none' : ''}}>
                                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                                <li>Faucibus pulvinar elementum integer enim</li>
                                                <li>Faucibus pulvinar elementum integer enim</li>
                                            </ol>
                                            <ol className={s.right} style={{display: currentModalSlide === 0 ? 'none' : ''}}>
                                                <li>Mi bibendum neque egestas congue quisque</li>
                                                <li>Venenatis lectus magna fringilla urna</li>
                                                <li>Venenatis lectus magna fringilla urna</li>
                                            </ol>
                                            <div className={s.nav}>
                                                <div className={s.marrow} onClick={rightSlide}>&#60;</div>
                                                <div className={`${s.dot} ${currentModalSlide === 0 ? s.active : ''}`}
                                                     onClick={leftSlide}></div>
                                                <div className={`${s.dot} ${currentModalSlide === 1 ? s.active : ''}`}
                                                     onClick={rightSlide}></div>
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
    currentSlide: PropTypes.number,
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
    index: 0,
    currentSlide: 0
}

export default SlideContent;