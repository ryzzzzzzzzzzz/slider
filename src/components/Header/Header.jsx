import s from "./style.module.css"
import house from "../../data/img/house.svg"
import PropTypes from "prop-types";

const Header = ({changeSlide}) => {
    return (
        <div className={s.header}>
            <img src={house} alt="house" onClick={() => changeSlide(0)}/>
            <span> | Project</span>
        </div>
    )
}

Header.PropTypes = {
    changeSlide: PropTypes.func.isRequired
}

export default Header