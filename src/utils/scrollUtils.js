export const handleScroll = (e) => {
    e.preventDefault();
};

export const getDirection = (diffX) => diffX > 0 ? -1 : 1;