import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';
import bottle from "./img/bottle.png";
import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';

export const SlidesData = () => {
    return [
        {
            bg: bg1,
            heading: 'Привет,',
            block: (<span>Это <b>не</b><br/>коммерческое<br/>задание</span>),
            btn: (<span>Что дальше?</span>)
        },
        {
            bg: bg2,
            heading: 'Текст сообщения',
            largeBlock: (
                <span><b>Lorem ipsum dolor sit amet</b>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam nulla, Mauris in aliquam sem fringilla ut morbi tincidunt.
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Est sit amet facilisis magna. Neque laoreet suspend sse interdum consectet r libero id.
                Nec ullamcorper sit amet risus nullam eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id Euismod quis viverra nibh cras pulvinar mattis nunc. Massa massa ultricies mi quis, Sit amet massa vitae tortor condimentum lacinia.
                Et malesuada fames ac turpis egestas integer eget. Elementumm pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. <br/><br/>
                Amet justo donec enim diam vulputate ut pharetra sit, Risus ultricies tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper morbi tincidunt ornare massa.
                Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet massa vitae tortor rondlimantum larinia nuis vel</span>)
        },
        {
            bg: bg3,
            bottle: bottle,
            heading: 'Ключевое сообщение',
            block: (<span>Brend<b>XY</b></span>),
            smallBlock1: (<span>Enicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies</span>),
            smallBlock2: (<span>A arcu <br/> cursus vitae</span>),
            btn: (<span>Подробнее</span>),
            icon1: icon1,
            icon2: icon2,
            modal: (<span>Преимущества</span>)
        },
    ]
}