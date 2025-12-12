/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg-color)',
                'glass-bg': 'var(--glass-bg)',
                'glass-border': 'var(--glass-border)',
                'glass-highlight': 'var(--glass-highlight)',
                accent: {
                    cyan: 'var(--accent-cyan)',
                    green: 'var(--accent-green)',
                    hover: '#00b5e5'
                },
                text: {
                    main: 'var(--text-main)',
                    secondary: 'var(--text-secondary)'
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            animation: {
                'text-shine': 'textShine 5s ease-in-out infinite alternate',
                'blob': 'move 20s infinite alternate',
            },
            keyframes: {
                textShine: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '100%': { backgroundPosition: '100% 50%' },
                },
                move: {
                    '0%': { transform: 'translate(0, 0) scale(1)' },
                    '100%': { transform: 'translate(20px, -20px) scale(1.1)' },
                }
            }
        },
    },
    plugins: [],
}
