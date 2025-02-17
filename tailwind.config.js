import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            fontFamily: {
                'inter-thin': ['Inter-thin', 'sans-serif'],
                'inter-light': ['Inter-light', 'sans-serif'],
                'inter-reguler': ['Inter-reguler', 'sans-serif'],
                'inter-medium': ['Inter-medium', 'sans-serif'],
                'inter-semibold': ['Inter-semibold', 'sans-serif'],
                'inter-bold': ['Inter-bold', 'sans-serif'],
                'inter-extrabold': ['Inter-extrabold', 'sans-serif'],
                'inter-black': ['Inter-black', 'sans-serif'],
                'oswald-light': ['Oswald-light', 'sans-serif'],  
                'oswald-regular': ['Oswald-regular', 'sans-serif'],  
                'oswald-medium': ['Oswald-medium', 'sans-serif'],  
                'oswald-semibold': ['Oswald-semibold', 'sans-serif'],  
                'oswald-bold': ['Oswald-bold', 'sans-serif'],  
            },
            colors: {
                'primary': "#0c1250",
                'secondary': '#f1f1f1',
            },
        },
    },

    plugins: [forms],
};
