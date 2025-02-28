import SlideItem from "./SlideItem.jsx";
import {useSlider} from "../../hooks/useSlider.js";
import s from "./slideItemsStyle.module.css"

const SliderOld = () => {
    const {slides} = useSlider();
    return (
        <div className={s.slider}>
            <div className={s.list}>
                <div className={s.track}>
                    {slides.map((slide) => (
                        <SlideItem
                            key={slide.id}
                            data={slide}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SliderOld;