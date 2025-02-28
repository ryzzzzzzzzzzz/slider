import bg1 from './img/bg1.png';
import bg2 from './img/bg2.png';
import bg3 from './img/bg3.png';

export const slides = [
    {
        id: 1,
        img: {
            src: bg1,
            alt: "bg1"
        },
        content: {
            heading: 'Привет,',
            text: 'Это не коммерческое задание'
        }
    },
    {
        id: 2,
        img: {
            src: bg2,
            alt: "bg2"
        },
        content: {
            heading: 'Текст сообщения',
            text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Egestas sit vivamus maximus; nullam facilisis ante adipiscing. Vehicula viverra commodo natoque sodales ex dictum primis ante dui. Euismod et platea netus; quis fermentum rhoncus ex. Non magna mollis porta; netus tempor ullamcorper dis nascetur. Nec felis metus sodales est ipsum sem. Id turpis et ante luctus dis? Hendrerit senectus suspendisse maecenas duis enim, curae eget netus. Magna dictum nostra diam potenti lorem hac nulla bibendum purus.\n' +
                '\n' +
                'Leo congue aliquam dis natoque ullamcorper massa. Dignissim et sollicitudin orci congue penatibus ante ut nibh hac. Vivamus sed odio proin platea lacinia hendrerit massa hendrerit. Nisi nisl eleifend aptent curabitur consectetur semper felis risus nulla. Libero nullam vestibulum vivamus mattis imperdiet sem vehicula tempor blandit? Mus blandit ridiculus gravida porttitor amet nunc faucibus rhoncus. Egestas maximus dis class fringilla elit euismod mauris inceptos.'
        }
    },
    {
        id: 3,
        img: {
            src: bg3,
            alt: "bg3"
        },
        content: {
            heading: 'Ключевое сообщение',
            block1: 'Enicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies',
            block2: 'A arcu cursus vitae'
        }
    }
]