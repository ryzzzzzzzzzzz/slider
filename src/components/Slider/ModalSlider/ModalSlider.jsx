import s from "./style.module.css"
import PropTypes from "prop-types";

const ModalSlider = ({controlModalSlider} ) => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <div className={s.close} onClick={() => controlModalSlider(false)}>
                    ×
                </div>
                <div className={s.content}>
                    <div className={s.slide}>
                        <ol className={s.list}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Faucibus pulvinar elementum integer enim</li>
                            <li>Faucibus pulvinar elementum integer enim</li>
                            {/*<li>Mi bibendum neque egestas congue quisque</li>*/}
                            {/*<li>Venenatis lectus magna fringilla urna</li>*/}
                            {/*<li>Venenatis lectus magna fringilla urna</li>*/}
                        </ol>
                    </div>
                    <div className={s.nav}>
                        <div className={s.dots}>
                            <div className={s.dot}></div>
                            <div className={s.dot}></div>
                        </div>
                        <div className={s.arrows}>
                            <div className={s.left}>&#60;</div>
                            <div className={s.right}>&#62;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ModalSlider.PropTypes = {
    controlModalSlider: PropTypes.func,
}

export default ModalSlider