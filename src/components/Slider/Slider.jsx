import s from "./style.module.css"
import {useEffect, useRef, useState} from "react";
import usePreventScroll from "../../hooks/usePreventScroll.js"
import bg1 from '../../data/img/bg1.png';
import bg2 from '../../data/img/bg2.png';
import bg3 from '../../data/img/bg3.png';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isChangingSlide, setIsChangingSlide] = useState(false);
    const preventScroll = usePreventScroll();

    const slides = [
        {img: bg1, heading: 'Привет,', block: 'Это не коммерческое задание'},
        {img: bg2, heading: 'Текст сообщения', largeBlock: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla, Mauris in aliquam sem fringilla ut morbi tincidunt. ' +
                'Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque laoreet suspend sse interdum consectet r libero id. ' +
                'Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id Euismod quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis, Sit amet massa vitae tortor condimentum lacinia. ' +
                'Et malesuada fames ac turpis egestas integer eget. Elementumm pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.\n' +
                'Amet justo donec enim diam vulputate ut pharetra sit, Risus ultricies tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare massa. ' +
                'Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae tortor rondlimantum larinia nuis vel'},
        {img: bg3, heading: 'Ключевое сообщение', smallBlock1: 'Enicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies', smallBlock2: 'A arcu cursus vitae'},
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
                        style={{backgroundImage: `url(${slide.img})`}}
                    >
                        <div className={s.content}>
                            <h1>{slide.heading}</h1>
                            <h2>{slide.block}</h2>
                            <p>{slide.largeBlock}</p>
                            <p>{slide.smallBlock1}</p>
                            <p>{slide.smallBlock2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;

// const Slider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const slideRef = useRef(null);
//     const [touchStartX, setTouchStartX] = useState(0);
//     const [touchStartY, setTouchStartY] = useState(0);
//     const [isDragging, setIsDragging] = useState(false);
//     const preventScroll = usePreventScroll();
//     const isPreventingScroll = preventScroll.current;
//     const [isChangingSlide, setIsChangingSlide] = useState(false);
//
//     const slides = [
//         {img: bg1, heading: '1'},
//         {img: bg2, heading: '2'},
//         {img: bg3, heading: '3'},
//     ];
//
//     const changeSlide = (newSlide) => {
//         setIsChangingSlide(true);
//         setTimeout(() => {
//             setCurrentSlide(newSlide);
//             setIsChangingSlide(false);
//         }, 200); // задержка в 200мс
//     };
//
//     // Применяем хук useTimeout
//     useTimeout(() => {
//         // Здесь можно добавить дополнительные действия
//     }, 200);
//
//     useEffect(() => {
//         const handleScroll = (e) => {
//             e.preventDefault();
//         };
//         document.body.addEventListener('touchmove', handleScroll, { passive: false });
//         document.body.addEventListener('mousemove', handleScroll, { passive: false });
//
//         return () => {
//             document.body.removeEventListener('touchmove', handleScroll);
//             document.body.removeEventListener('mousemove', handleScroll);
//         };
//     }, []);
//
//     const handleMouseDown = (e) => {
//         setTouchStartX(e.clientX);
//         setTouchStartY(e.clientY);
//         setIsDragging(true);
//     };
//
//     const handleMouseMove = (e) => {
//         if (!isDragging) return;
//         const currentX = e.clientX;
//         const diffX = currentX - touchStartX;
//
//         if (Math.abs(diffX) > 40) {
//             const direction = diffX > 0 ? 1 : -1;
//             setCurrentSlide((prev) => {
//                 const newSlide = prev + direction;
//                 return newSlide < 0 ? slides.length - 1 : newSlide % slides.length;
//             });
//             setTouchStartX(currentX); // сбрасываем начальную позицию
//         }
//     };
//
//     const handleMouseUp = () => {
//         setIsDragging(false);
//     };
//
//     const handleTouchStart = (e) => {
//         preventScroll.current = true;
//         setTouchStartX(e.touches[0].clientX);
//         setTouchStartY(e.touches[0].clientY);
//         setIsDragging(true);
//         preventScroll.current = true; // включаем предотвращение прокрутки
//     };
//
//     const handleTouchMove = (e) => {
//         if (!isDragging) return;
//         const currentX = e.touches[0].clientX;
//         const diffX = currentX - touchStartX;
//
//         // Добавляем проверку на минимальное расстояние для смены слайда
//         if (Math.abs(diffX) > 100) { // увеличиваем порог с 40 до 100
//             const direction = diffX > 0 ? 1 : -1;
//             setCurrentSlide((prev) => {
//                 const newSlide = prev + direction;
//                 return newSlide < 0 ? slides.length - 1 : newSlide % slides.length;
//             });
//             setTouchStartX(currentX);
//         }
//     };
//
//     const handleTouchEnd = () => {
//         preventScroll.current = false;
//         setIsDragging(false);
//         preventScroll.current = false; // отключаем предотвращение прокрутки
//     };
//
//     useEffect(() => {
//         if(slideRef.current) {
//             slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
//         }
//     }, [currentSlide]);
//
//     return (
//         <div className={s.slider}
//              onTouchStart={handleTouchStart}
//              onTouchMove={handleTouchMove}
//              onTouchEnd={handleTouchEnd}
//              onMouseDown={handleMouseDown}
//              onMouseMove={handleMouseMove}
//              onMouseUp={handleMouseUp}
//              onMouseLeave={handleMouseUp}
//         >
//             <div
//                 className={s.slides}
//                 ref={slideRef}
//                 style={{
//                     transform: `translateX(-${currentSlide * 100}%)`,
//                     transition: 'transform 0.8s ease)'
//                 }}
//             >
//                 {slides.map((slide, index) => (
//                     <div
//                         className={s.slide}
//                         key={index}
//                         style={{backgroundImage: `url(${slide.img})`}}
//                     >
//                         <div className={s.content}>
//                             <h2>{slide.heading}</h2>
//                         </div>
//                     </div>
//                 ))}
//                 {slides.length > 0 && (
//                     <div
//                         className={s.slide}
//                         style={{backgroundImage: `url(${slides[0].img})`}}
//                     >
//                         <div className={s.content}>
//                             <h2>{slides[0].heading}</h2>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default Slider;