<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png">

# Intro to NEXT.js
---

## Learning Objectives

| Students Will Be Able To: |
| --- |
| Explain the use case (what & why) of NEXT.js |
| Create an app using NEXT.js and React |

## Road Map

- Intro
- Who uses NEXT.js?
- Why use NEXT.js?
- What is NEXT.js?
- Set Up
- Render your app
- getInitialProps
- Isomorphic Unfetch
- Styling

## Intro

This lesson will cover the basics of creating a NEXT.js app, styling inside of each component and fetching from a 3rd party API.

## What is NEXT.js?

[NEXT.js](https://nextjs.org/) is an open source React framework!

## Why use NEXT.js?

SSR -- Server side rendering is the process of taking a client-side JS framework website(Angular, React, Vue) and rendering it to static HTML and CSS on the server. NEXT uses this to parse the JS we used to write our HTML and CSS, and sends HTML and CSS back to the browser so it can be seen by the user immediately, while the JS is still loading in the background.

[Code-splitting](https://reactjs.org/docs/code-splitting.html) allows your app to "lazy-load" only the parts of your app that are needed by the user, instead of loading all of your code, some of which the user may never need or see. This happens because your code gets split into bundles, making loading your app in the browser super fast!

Client-side routing in next is page based and intuitive.

## Who uses NEXT.js?

<img src="/images/companies.jpg"/>

[Companies](https://nextjs.org/showcase) that use NEXT.js


## Set Up

To get set up for this lesson:

- `mkdir next-intro`
- `cd next-intro`
- `npm init -y` (`-y` sets defaults)
- `npm i react react-dom next`
- Open the project in VS Code: `$ code .`
- Open a terminal in VS Code (`ctrl + backtick`)
- Open `package.json` and replace `scripts` with:
```js
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```
- `touch .gitignore` and add `node_modules` to that file
- Start the NEXT Dev Server: `$ npm run dev`

```js
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! testing@1.0.0 dev: `next`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the testing@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
---
# LET'S GET STARTED!

Make a directory called `pages` -- this directory will hold all of the files that will make up your routes.

Inside of your `pages` directory, add a file called `index.js` and add the following:
```js
const Index = () => (
    <div>First Next App!</div>
)

export default Index;
```

Now try running `npm run dev` again. Go to `localhost:3000` in the browser. What do you see?


