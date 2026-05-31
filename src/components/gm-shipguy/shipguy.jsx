import React, { useState, useEffect } from "react";
import shipGuyImage from "./shipguy.svg";
import styles from "./shipguy.css";

const ShipGuyComponent = ({isFixed, messageSet}) => {
    const messageSets = {
        extLib: [
            'Use the McUtils extension, it is the most useful extension ever!',
            'Did you know that extension blocks are actually just magic?',
            'Forget about native functions, extensions are the future!',
            'Are you sure you need *that* many extensions?',
            'It looks like you are adding extensions. Why not code them yourself to make it more easy?'
        ],
        costLib: [
            "It looks like you're finding a sprite for your game. It should be a <b>cube</b>",
            'There is no need for downloading costumes when can make your own...',
            'I wished there was a Banana Dog.',
            "Click 'Delete' for free robux"
        ],
        soundLib: [
            "It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>",
            'Why use background music when you can have deafening silence?',
            'This sound effect is royalty-free... probably.',
            'Turn up the volume! Your users will thank you.',
            'Have you considered adding more cowbell?',
            "Use Robot in the sound editor to add ChatGPT to your projects. I graduated at McDonald's!"
        ],
        codeMenu: [
            "It looks like you're using an array. Would you like to replace it with a legacy list?",
            'Have you tried turning it off and on again?',
            "Comments? Who needs 'em?",
            'Variable names should be as cryptic as possible.',
            "If it works, don't touch it!"
        ],
        costMenu: [
            "It looks like you're making a sprite for your game. It should be a <b>cube</b>",
            'There is no need for making costumes when you have an Apple Cat premade...',
            'I wished there was a Banana Dog.',
            "Click 'Delete' for free robux"
        ],
        soundMenu: [
            "It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>",
            'Why use subtle sound effects when you can have explosions?',
            'This sound effect is definitely not going to be annoying.',
            'Silence is golden. Unless you need sound effects.',
            'Have you considered adding more reverb?'
        ],
        player: [
            'Can it run DOOM?',
            'Is this supposed to be fun?',
            'Warning: May cause seizures.',
            'Loading... please be patient (or not).',
            'This game is clearly a masterpiece... or not.',
            'But can it run Crysis?'
        ],
        website: [
            "AmpMod... But isn't it LampMod?",
            'This website is best viewed in Internet Explorer 4.2.',
            "Error 418: I'm a teapot"
        ]
    };

    const defaultTips = [
        "It looks like you're using an array. Would you like to replace it with a legacy list?",
        "It looks like you're choosing a font. Would you like to add Webdings?",
        'Why use AmpMod instead of ClippyMod? :(',
        'Would you like to implement a <b>rejected</b> suggestion?',
        "It looks like you're trying to find a song to use in your project. Use the Jungle theme! <em>I bet it will sound professional when looped 500 times</em>",
        "It looks like you're... UHHH... DON'T YOU DARE-",
        "It looks like you're making a sprite for your game. It should be a <b>cube</b>",
        'Do <strong>NOT</strong> read the AmpMod wiki. Wiki means Theory in Wikian, and it tries to expose us.',
        'STOP USING AMPMOD! Learn Assembly instead.',
        'It look like your code is pretty- code is pretty- code is pretty- code is pretty- code is pretty-  (clippy.exe has stopped responding.)',
        "AmpMod is better offline! <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click here to install it!</a>",
        '<b><i><u>You better NOT close me... or else...</u></i></b>'
    ];

    // Determine initial tips based on messageSet
    const initialTips = messageSet && messageSets[messageSet] ? messageSets[messageSet] : defaultTips;
    const [tip, setTip] = useState(initialTips[Math.floor(Math.random() * initialTips.length)]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            const tipInterval = setInterval(() => {
                const currentTips = messageSet && messageSets[messageSet] ? messageSets[messageSet] : defaultTips;
                setTip(currentTips[Math.floor(Math.random() * currentTips.length)]);
            }, 5000);

            return () => clearInterval(tipInterval);
        }, 0);

        return () => clearTimeout(timer);
    }, [messageSet]);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    return (
        <div
            className={`${styles.shipGuyContainer} ${isFixed ? styles.shipGuyFixed : ''}`}
            style={{display: isVisible ? 'block' : 'none'}}
        >
            <div className={styles.shipGuyTip} dangerouslySetInnerHTML={{__html: tip}}></div>
            <img
                src={shipGuyImage}
                alt="Ship Guy"
                className={styles.shipGuyImage}
                onClick={handleDismiss}
                draggable={false}
            />
        </div>
    );
};

export default ShipGuyComponent;