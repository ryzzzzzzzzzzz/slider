export const calculateNewIndex = (currentSlide, newSlide, slidesLength) => {
    const newIndex = (currentSlide + newSlide + slidesLength) % slidesLength;
    return newIndex >= 0 && newIndex < slidesLength ? newIndex : currentSlide;
};