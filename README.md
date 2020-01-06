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

Client-side routing in NEXT is page based and intuitive.

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

Try running `npm run dev` again. Now that there are no errors in the console, go to `localhost:3000` in the browser. What do you see?

NEXT used the `index.js` file in your `pages` directory as the landing page for your app.


Now let's add an About page to our app. Create a file called `about.js` in the pages directory and add the following:

```js
const About = () => (
    <div>This is the about page</div>
)

export default About;
```

Save that file and go to `localhost:3000/about` and you should see your `about.js` file rendered in the browser. Routing with NEXT is that easy!

Let's link the index page and about page together. We can import NEXT's Link API to start using `<Link>` tags. Add this line to the top of the index and about pages: `import Link from 'next/link'`

The best part about using `Link` in NEXT is that as long as the corresponding url is local, it is prefetched so when the link is clicked on, the front end shows the new page without sending a request to the server and therefore is rendered lightning fast.

Now that we've imported `Link` we can create tags to link our pages Make a `<nav>` element that we can add to both of our pages:

```js
<nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
</nav>

```
This could get repetitive if we had a bunch of pages that have the nav bar, so we can make this a component to make it a little cleaner.

In your root directory `mkdir components` and add a `Nav.js` file. Make a component for Nav just like you'd normally do in React. Now let's take the code for the nav bar and put it in this component.

Don't forget to import `React` and `Link`. Now we can replace the nav bar code w the Nav component in our pages. After you've saved the page should look and work like it did before.

---

#### Layout Component

We've cleaned up our code a little bit but now if we'd like to scale we can add a component to give all of our pages a general layout.

Create a file called `Layout.js` in your components directory. Import your Nav component into this file so you can add it.

Now your code should look like this:

```js
import Nav from "/Nav"

const Layout = () => (
    <div>
        <Nav />

    </div>
)

export default Layout;
```

Cool so now we have a basic layout that we can use for our pages. The benefit of using a layout component is that we can give our layout props. We can pass content from our pages to our layout component as props so that we can use the layout on any page we'd like.

Pass props to your `Layout` component and add this line under your Nav component:  `{props.children}`


```js
import Nav from "/Nav"

const Layout = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

export default Layout;
```

We can go back to our Index and About pages and use our `Layout` but before we do that, let's add a head to our layout so pass metadata and add things like a title and an icon to the tab on our pages.

Add this line to the top of your page: `import Head from next/head`. Using this we can use head tags like we would do in ordinary HTML. Using the head tag is also one way to add external CSS or CSS libaries, but we'll add CSS a different way later. For now, add the tags below into our `Layout` component:

```js
<Head>
    <title>Currency Exchange</title>
    <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png">
</Head>
```

---


Now let's actually use our layout on our Index and About pages. Import the `Layout` component into both files and replace the outer `<div>` tags with `<Layout>` tags. 

After adding these, our app will still look the same, and our code is a lot cleaner. Your Index page should look like this:

```js
import Layout from '../components/Layout'

const Index = () => (
    <Layout>
        <h1>First Next App!</h1>
    </Layout>
)
```
---

## 







