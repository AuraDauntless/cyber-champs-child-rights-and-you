import bg1 from '../assets/level2/images/water.png';
import bg2 from '../assets/level2/images/trees.png';
import bg3 from '../assets/level2/images/Project (20260111045559).png';
import villain from '../assets/antagonists/phishing.png';

export const level2 = {
    id: 2,
    name: "The Data Lake",
    threat: "Phishing",
    speed: 15,
    backgrounds: [
        { src: bg1, speedModifier: 0.5 },
        { src: bg2, speedModifier: 0.8 },
        { src: bg3, speedModifier: 1.0 }
    ],
    antagonist: {
        src: villain,
        frameCount: 1,
        scale: 0.25
    },
    questions: [
        {
            question: "You get an email saying you won a free iPhone, but it asks for your password. What is this?",
            options: ["A lucky break", "A phishing scam", "A gift from a friend", "A software update"],
            correctIndex: 1
        },
        {
            question: "Should you click on links in emails from people you don't know?",
            options: ["Yes, always", "Only if it looks cool", "No, never", "Only on weekends"],
            correctIndex: 2
        }
    ]
};
