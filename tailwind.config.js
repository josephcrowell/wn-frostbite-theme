const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        '../../plugins/*/*/blocks/*.block',
        './theme.yaml',
        './assets/src/js/**/*.{js,vue}',
        './blocks/**/*.block',
        './layouts/**/*.htm',
        './pages/**/*.htm',
        './partials/**/*.htm',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                slate: colors.slate,
                gray: colors.gray,
                zinc: colors.zinc,
                neutral: colors.neutral,
                stone: colors.stone,
                red: colors.red,
                orange: colors.orange,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,
            },
        },
    },
    darkMode: 'media',
    plugins: [
        require('flowbite/plugin')
    ],
}
