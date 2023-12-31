const mix = require('laravel-mix');

mix
    .setPublicPath(__dirname)

    // Render Tailwind style
    .postCss('assets/src/css/theme.css', 'assets/dist/css/theme.css', [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])

    // Compile JS
    .js('assets/src/js/theme.js', 'assets/dist/js/theme.js')

    .webpackConfig({
        stats: {
            children: true
        }
    });
