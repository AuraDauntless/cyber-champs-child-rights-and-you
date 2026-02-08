import bg1 from '../assets/level3/images/digital_fortress_bg1.png';
import bg2 from '../assets/level3/images/digital_fortress_bg2.png';
import bg3 from '../assets/level3/images/eyes.png';
import villain from '../assets/level3/images/villian.png';

export const level3 = {
    id: 3,
    name: "The Digital Fortress",
    threat: "Virus",
    speed: 18,
    backgrounds: [
        { src: bg1, speedModifier: 0.4 },
        { src: bg2, speedModifier: 0.7 },
        { src: bg3, speedModifier: 1.0 }
    ],
    antagonist: {
        src: villain,
        frameCount: 1,
        scale: 0.35
    },
    questions: [
        {
            question: "What is a computer virus?",
            options: ["A flu for people", "Harmful software that can hide on your PC", "A type of mouse", "A screen cleaner"],
            correctIndex: 1
        },
        {
            question: "How can you protect your computer from viruses?",
            options: ["Wash it with soap", "Use strong passwords and antivirus software", "Cover it with a blanket", "Turn it off and never use it"],
            correctIndex: 1
        }
    ]
};
