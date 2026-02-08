import bg1 from '../assets/level5/images/bg_buzz.png';
import bg2 from '../assets/level5/images/purple_screen.png';
import villain from '../assets/level5/images/gaming_villain.png';

export const level5 = {
    id: 5,
    name: "The Hacker Tower",
    threat: "Hackers",
    speed: 25,
    backgrounds: [
        { src: bg1, speedModifier: 0.5 },
        { src: bg2, speedModifier: 1.0 }
    ],
    antagonist: {
        src: villain,
        frameCount: 1,
        scale: 0.4
    }
};
