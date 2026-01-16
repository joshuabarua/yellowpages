import animate from 'tailwindcss-animate';
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}', './node_modules/@shadcn/ui/**/*.{ts,tsx,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                excon: ["Excon", "system-ui", "sans-serif"],
                renade: ["Renade", "system-ui", "sans-serif"],
            },
            colors: {
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                'primary-foreground': 'rgb(var(--primary-foreground) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                'secondary-foreground': 'rgb(var(--secondary-foreground) / <alpha-value>)',
                destructive: 'rgb(var(--destructive) / <alpha-value>)',
                'destructive-foreground': 'rgb(var(--destructive-foreground) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                input: 'rgb(var(--input) / <alpha-value>)',
                ring: 'rgb(var(--ring) / <alpha-value>)',
            },
        },
    },
    plugins: [animate],
};
