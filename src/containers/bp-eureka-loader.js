// stole this from Snail-IDE. Not mine.

let injected = false;

const load = () => {
    if (injected) return;
    injected = true;

    const script = document.createElement('script');
    script.src = `/Eureka-7.js`;

    document.head.appendChild(script);
};

export default {
    load
}