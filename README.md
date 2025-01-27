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
- What is NEXT.js?
- Why use NEXT.js?
- Who uses NEXT.js?
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

Great for SEO(search-engine optimization) because of SSR. These pages are crawled by search engine bots more efficiently. NEXT also adds metadata to your app to also help web-crawlers understand the content on your pages.
You can use a package like `nextjs-sitemap-generator` to create a sitemap but we won't be using it for our small app.

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
  "start": "next start -p $PORT",
  "heroku-postbuild": "npm run build"
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
    <title>Currency Exchange Rates</title>
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

## getInitialProps()

So with this shell with can make any type of app we want. We are going to create a currency exchange rate app using data from an external [API](https://www.exchangerate-api.com/). 

Using the `getInitialProps` method, we can run an asynchronous function on the server to retrieve the data from the API and then pass it to the page as props.

First, we'll have to install `isomorphic unfetch` to use fetch with NEXT. Run `npm i isomorphic-unfetch` in your project's root directory.

Now import it at the top of your Index page: `import fetch from 'isomorphic-unfetch'` and we're ready to go.

Add the following code to underneath your Index function:

```js
Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await res.json()
    return {
        data: data
    }
}
```

The keyword `async` in front of a function means that the function returns a `Promise` even if the code inside the function is not a promise.
We are using a `Promise` by using fetch, so we want to use `async` so that we can use another keyword:

`await` waits for a `Promise` to return a result before running the code that follows it. 

Using `await` we can now wait until our fetch has retrieved our data before setting it to our `res` variable. 

The same applies for the next line where we wait for `res` to become json before setting it to the `data` variable and then returning it.

You can read more about `async await` [here](https://javascript.info/async-await)

---

Now that we have the data from our API to use as props, we can start shaping our app. Check the `components` tab in your dev tools to make sure your Index page is receiving the data as props.

When you do, add props as parameter toy your Index function so we can use them inside.

Now we can use the data here and also pass it down to any other components.

We are going to pass the data down to a <Rates /> component to keep our index page code clean. Update your index page to look like the following:


```js
import Fetch from "isomorphic-unfetch";
import Layout from '../components/Layout'
import Rates from '../components/Rates'

const Index = (props) => (
    <Layout>
        <h1>Currency Exchange Rates</h1>
        <Rates rates={props.rates}/>

    </Layout>
)


Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = await res.json()
    return {
        rates: rates
    }
}

export default Index;
```

We get an error since we haven't made a Rates component yet. Run `touch Rates.js` in your components directory. Go ahead and paste the code below since we already know how to work with data:

```js
import React, { Component } from 'react';

class Rates extends Component {
    constructor(props){
        super(props)
        this.state = {
            currency: parseFloat(1).toFixed(2)
        }
    }

    updateCurrency = (event) => {
        this.setState({
            currency: parseFloat(event.target.value).toFixed(2)
        })
    }

    render(){
        return(
            <div>
                <h4>
                    $1 {this.props.rates.base} is worth {this.state.currency} in
                    <select onChange={this.updateCurrency}>
                        {Object.keys(this.props.rates.rates).map((key, index) => {
                            return(
                                <option value={this.props.rates.rates[key]}>{key}</option>
                            )
                        })}
                    </select>

                </h4>
            </div>
        )
    }
}

export default Rates;
```


So now you have a fully functioning app that shows you the value of your dollars in the selected currency.

Let's learn how to style and then you can go finish the app to look how you'd like.

---

### Styling Components in JSX

In NEXT it has become popular to style components right inside of them in order to avoid having to import and keep track of multiple CSS files.

Right underneath the content of our component, we can add  `<style jsx>` tags.

Using these tags, we can use CSS just as we normally would:

```js
<style jsx>{`
    h1, {
        font-family: 'Open Sans';
        color: grey
    }
`}</style>
```


### Congrats! You've built your first app in NEXT.js. Now go style it however you'd like!


---

### Bonus

#### Deployment to Heroku

We already have the appropriate scripts for deployment on Heroku inside of our `scripts` on out package.json file.

Check to see if you have the Heroku CLI installed on your computer. Run `heroku -v`

If you get a version number back then you already have it installed. If not, first make sure you have an account already on [Heroku](https://heroku.com).

After your account is made, you can run `brew tap heroku/brew && brew install heroku` 

Once that is installed you can run `heroku login` to start using the CLI to push your app to heroku.

In your project's root directory run `git init` to put the project in a repo that we can push to Heroku. 

Now we can run `heroku create <name of your choice>`

Run `git remote -v` to check and make sure that `heroku` is now a remote you can access. If not, you can run `git remote add heroku <heroku git address>` to add your new app's git repo as a remote.

Now you can `add`, `commit`, and `push` to Heroku.



---

###### Walkthrough/Tutorial by Carlos Godoy



