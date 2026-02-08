import bg1 from '../assets/level4/images/bg1.png';
import bg2 from '../assets/level4/images/bg2.png';
import bg3 from '../assets/level4/images/bg3.png';
import villain from '../assets/level4/images/villain.png';

export const level4 = {
    id: 4,
    name: "The Privacy Vault",
    threat: "Privacy Protection",
    speed: 21,
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
            question: "What is 'Two-Factor Authentication' (2FA)?",
            options: ["An extra layer of security", "Having two passwords", "Two people using one account", "A type of game"],
            correctIndex: 0
        },
        {
            question: "A 'Strong Password' should have:",
            options: ["Only numbers", "Your name and birth year", "Letters, numbers, and symbols", "Just '123456'"],
            correctIndex: 2
        }
    ]
};
