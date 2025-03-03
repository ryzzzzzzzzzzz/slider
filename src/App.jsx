import './App.css'
import Slider from "./components/Slider/Slider.jsx";
import Header from "./components/Header/Header.jsx";
import {useState} from "react";

function App() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (n) => {
        setCurrentSlide(n)
    }

  return (
    <>
        <Header changeSlide={changeSlide}/>
        <Slider currentSlide={currentSlide} changeSlide={changeSlide}/>
    </>
  )
}

export default App
