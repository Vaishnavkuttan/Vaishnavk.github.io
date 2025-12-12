import React from 'react';

const BackgroundAnimation = () => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
            <div className="prism-blob bg-accent-cyan/10 w-[50vw] h-[50vw] top-[-10%] left-[-10%] absolute rounded-full blur-[100px] animate-blob"></div>
            <div className="prism-blob bg-accent-green/10 w-[60vw] h-[60vw] bottom-[-10%] right-[-10%] absolute rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
            <div className="prism-blob bg-[#5e5ce6]/10 w-[40vw] h-[40vw] top-[40%] left-[40%] absolute rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjeWNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>
    );
};

export default BackgroundAnimation;
