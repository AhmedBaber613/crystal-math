// postcss.config.js
import tailwindcss from '@tailwindcss/postcss'; // <--- Correct import
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};