import React, { useEffect, useState } from 'react';
import { level1 } from '../levels/level1';
import { level2 } from '../levels/level2';
import { level3 } from '../levels/level3';
import { level4 } from '../levels/level4';
import { level5 } from '../levels/level5';

const levelData = [level1, level2, level3, level4, level5];

const LevelIntro = ({ levelIdx, onStartLevel }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => {
            onStartLevel();
        }, 4000); // Show for 4 seconds
        return () => clearTimeout(timer);
    }, [onStartLevel]);

    const level = levelData[levelIdx];

    // Theme colors/names mapping
    const themes = [
        { title: "Cyber Bullying", color: "#ffd806", desc: "Stand up for your friends online!" },
        { title: "Phishing Attacks", color: "#1CB7B8", desc: "Don't click on suspicious links!" },
        { title: "Malware & Viruses", color: "#F16723", desc: "Protect your device from bugs!" },
        { title: "Privacy Protection", color: "#6B2F67", desc: "Keep your personal info safe!" },
        { title: "Hacking & Safety", color: "#E4296B", desc: "Protect your accounts and data!" }
    ];

    const currentTheme = themes[levelIdx] || { title: level.name, color: "#fff", desc: "Get ready!" };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#2d1440',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            fontFamily: '"Outfit", sans-serif',
            color: 'white',
            overflow: 'hidden'
        }}>
            {/* Animated Background Circles */}
            <div style={{
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                backgroundColor: currentTheme.color,
                opacity: 0.1,
                transform: animate ? 'scale(2.5)' : 'scale(0)',
                transition: 'transform 1.5s ease-out'
            }} />

            <div style={{
                zIndex: 10,
                textAlign: 'center',
                opacity: animate ? 1 : 0,
                transform: animate ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.2s'
            }}>
                <h2 style={{
                    fontSize: '2.5rem',
                    margin: '0 0 10px 0',
                    color: '#ccc',
                    letterSpacing: '3px',
                    textTransform: 'uppercase'
                }}>
                    Level {levelIdx + 1}
                </h2>

                <h1 style={{
                    fontSize: '5rem',
                    margin: '0 0 20px 0',
                    color: currentTheme.color,
                    fontWeight: '900',
                    textShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                    {currentTheme.title}
                </h1>

                <p style={{
                    fontSize: '1.8rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.4'
                }}>
                    {currentTheme.desc}
                </p>
            </div>

            {/* Progress Bar */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                width: '300px',
                height: '4px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                borderRadius: '2px',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: currentTheme.color,
                    transform: animate ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 4s linear'
                }} />
            </div>
        </div>
    );
};

export default LevelIntro;
