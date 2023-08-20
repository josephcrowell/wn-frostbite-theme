# Frostbite Theme

<p align="center">
  <a href="https://packagist.org/packages/josephcrowell/wn-frostbite-theme">
    <img src="https://img.shields.io/badge/Winter CMS-Theme-%23EE7203.svg">
  </a>
  <a href="https://www.patreon.com/josephcrowell">
    <img src="https://img.shields.io/badge/Support_on-Patreon-green.svg">
  </a>
  <a href="https://opensource.org/license/mit/">
    <img src="https://img.shields.io/badge/License-MIT-lightgrey.svg">
  </a>
</p>

The Frostbite Theme is a simple theme built on [Tailwind CSS](https://tailwindcss.com/) and [Flowbite](https://flowbite.com/docs/) that aims to be a base theme for [Winter CMS](https://wintercms.com/). This theme uses [Winter Mix](https://wintercms.com/docs/console/asset-compilation) for asset compilation.

## Requirements

- Winter CMS 1.1.8 or above.
- NodeJS 12 or above, if you wish to style the theme.

## Development

The theme is built on Tailwind CSS and Flowbite, which are built using the NodeJS framework. To be able to compile any changes made to the styling or content, you must use the Mix commands that are included with Winter CMS 1.1.8 and above.

You must first install the Node dependencies required for the theme.

```bash
php artisan mix:install -p theme-frostbite
```

Then, to compile the Tailwind CSS styles for development, run the following command in the root folder of the project:

```bash
php artisan mix:compile -p theme-frostbite
```

To compile the Tailwind CSS styles for production (which should be done if you commit any changes to the Frostbite theme), you must add the `--production` flag to the above command:

```bash
php artisan mix:compile -p theme-frostbite --production
```

To make it easy to develop the theme, you can also watch the necessary template and stylesheet files for any changes:

```bash
php artisan mix:watch theme-frostbite
```
