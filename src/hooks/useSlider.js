import {useState} from "react";
import {slides} from "../data/slides.js";

export const useSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1))
    }

    return {
        currentSlide,
        slides,
        nextSlide,
        prevSlide
    }
}