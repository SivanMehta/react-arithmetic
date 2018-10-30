# `react-calculator`

You can go to the [deployed page](https://sivanmehta.github.io/react-calculator/index.html)
and try to match the color using the RGB sliders.

## Running it yourself

There are pre-build assets in `dist/build.js`, so you only actually need to serve
the landing page to actually play the game

```sh
python -m SimpleHTTPServer
```

But if you want to play around and re-build the assets at will you will actually
have to install a few things

```sh
npm install # get all the dependencies
npm run build # run webpack
npm start # start an http server to serve assets
```

## Tests [![Build Status](https://travis-ci.com/SivanMehta/react-calculator.svg?branch=master)](https://travis-ci.com/SivanMehta/react-calculator)

```sh
npm test
```
