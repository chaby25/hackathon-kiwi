# travel-hack
The purpose of this repository is to provide a simple boilerplate for [Travel Hackathon](https://hack.travel/) to be ready for coding!

It contains all necessary things to start building application upon `orbit-components` and `kiwicom-relay`, with help of `next.js`.

## Used packages
 - [@kiwicom/orbit-components](https://github.com/kiwicom/orbit-components) - React components of our Orbit Design System
 - [@kiwicom/relay](https://github.com/kiwicom/relay) - Opinionated Relay wrapper for Kiwi.com
 - [@kiwicom/fetch](https://github.com/kiwicom/fetch) - Production ready fetch function
 - [@kiwicom/babel-preset-kiwicom](https://github.com/kiwicom/babel-preset-kiwicom) - Generic Babel preset for Kiwi.com projects
 - [@kiwicom/eslint-config-kiwicom](https://github.com/kiwicom/eslint-config-kiwicom) - General eslint configuration for Kiwi.com
 - and also [styled-components](https://github.com/styled-components/styled-components) - Probably the most used and the most famous CSS-in-JSS framework
 
## Installation
All you have to do is to clone this repository and install dependencies: 
```bash
git clone git@github.com:kiwicom/travel-hack.git
cd travel-hack
yarn
```

You are almost done now! Just simple use this command and start a dev server:
```
yarn dev
```

If you don't know how `next.js` works, just check its [docs](https://nextjs.org/docs/).

## Other commands
If you want to build your project, just run:
```bash
yarn build
```
All needed files will appear in `.next` folder that you can deploy somewhere.

There is also installed `eslint` so you can run `yarn lint` to lint your files and check for errors or warnings.

## Static typing
By default, the `Flow` is disabled so you can focus on developing something more valuable and don't have to waste time on static typing of your code.

If you want, you can delete rules inside `.eslintrc.js` file to enable Flow types. If so, you can use command to generate Flow types from GraphQL schema:
```
yarn relay
```
