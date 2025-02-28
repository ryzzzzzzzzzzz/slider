import s from "./style.module.css"
import {useEffect, useRef, useState} from "react";
import usePreventScroll from "../../hooks/usePreventScroll.js"
import bg1 from '../../data/img/bg1.png';
import bg2 from '../../data/img/bg2.png';
import bg3 from '../../data/img/bg3.png';
import bottle from '../../data/img/bottle.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isChangingSlide, setIsChangingSlide] = useState(false);
    const preventScroll = usePreventScroll();

    const slides = [
        {bg: bg1, heading: 'Привет,', block: (<span>Это <b>не</b><br/>коммерческое<br/>задание</span>), btn: 'Что дальше?'},
        {bg: bg2, heading: 'Текст сообщения', largeBlock: (<span><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla, Mauris in aliquam sem fringilla ut morbi tincidunt.
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque laoreet suspend sse interdum consectet r libero id.
                Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id Euismod quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis, Sit amet massa vitae tortor condimentum lacinia.
                Et malesuada fames ac turpis egestas integer eget. Elementumm pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. <br/><br/>
                Amet justo donec enim diam vulputate ut pharetra sit, Risus ultricies tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare massa.
                Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae tortor rondlimantum larinia nuis vel</span>)},
        {bg: bg3, bottle: bottle, heading: 'Ключевое сообщение', block: (<span>Brend<b>XY</b></span>), smallBlock1: 'Enicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies', smallBlock2: (<span>A arcu <br/> cursus vitae</span>)},
    ];

    const changeSlide = (newSlide) => {
        setIsChangingSlide(true);
        setTimeout(() => {
            const newIndex = (currentSlide + newSlide + slides.length) % slides.length;
            if (newIndex >= 0 && newIndex < slides.length) {
                setCurrentSlide(newIndex);
            }
            setIsChangingSlide(false);
        }, 200);
    };

    useEffect(() => {
        const handleScroll = (e) => {
            e.preventDefault();
        };
        document.body.addEventListener('touchmove', handleScroll, { passive: false });
        document.body.addEventListener('mousemove', handleScroll, { passive: false });

        return () => {
            document.body.removeEventListener('touchmove', handleScroll);
            document.body.removeEventListener('mousemove', handleScroll);
        };
    }, []);

    const handleMouseDown = (e) => {
        setTouchStartX(e.clientX);
        setIsDragging(true);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || isChangingSlide) return;
        const currentX = e.clientX;
        const diffX = currentX - touchStartX;

        if (!isChangingSlide && Math.abs(diffX) > 100) {
            const direction = diffX > 0 ? -1 : 1;
            changeSlide(direction);
            setTouchStartX(currentX);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        preventScroll.current = true;
        setTouchStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging || isChangingSlide) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - touchStartX;

        if (!isChangingSlide && Math.abs(diffX) > 100) {
            const direction = diffX > 0 ? -1 : 1;
            changeSlide(direction);
            setTouchStartX(currentX);
        }
    };

    const handleTouchEnd = () => {
        preventScroll.current = false;
        setIsDragging(false);
    };

    useEffect(() => {
        if(slideRef.current) {
            slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <div className={s.slider}>
            <div
                ref={slideRef}
                className={s.slides}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleTouchEnd}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={s.slide}
                        style={{backgroundImage: `url(${slide.bg})`}}
                    >
                        <div className={s.content}>
                            <div className={s.blocks}>
                                {slide.smallBlock1 ?
                                    <div className={s.bottleSlide}>
                                        <img className={s.bottle} src={slide.bottle} alt="bottle"/>
                                        <div className={s.bottleText}>
                                            <h1>{slide.heading}</h1>
                                            <h2>{slide.block}</h2>
                                            <div className={s.smallBlocks}>
                                                <p>{slide.smallBlock1}</p>
                                                <p>{slide.smallBlock2}</p>
                                            </div>
                                        </div>
                                    </div>
                                    : <div>
                                        <h1>{slide.heading}</h1>
                                        <h2>{slide.block}</h2>
                                    </div>
                                }
                                {slide.btn &&
                                    <button className={s.btn}><div className={s.arrow}>&rarr;</div><span>{slide.btn}</span></button>
                                }
                                {slide.largeBlock &&
                                    <div className={s.largeBlock}>
                                        <div className={s.text}>
                                            {slide.largeBlock}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;