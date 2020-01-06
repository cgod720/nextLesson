import Nav from './Nav'
import Head from 'next/head'


const Layout = (props) => (
    <div>
        <Head>
            <title>Currency Exchange</title>
            <link rel="icon" href="https://cdn3.iconfinder.com/data/icons/hotel-10-1/48/452-512.png"/>
        </Head>
        <Nav />
            {props.children}
    </div>
)

export default Layout;