import React from 'react'
import Link from 'next/link';

const Nav = () => (
    <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <style jsx>{`
            a {
                text-decoration: none;
                margin-right: 5vw;
                color: blue;
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </nav>
)

export default Nav;