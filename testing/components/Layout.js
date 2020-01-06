import Nav from './Nav'


const Layout = (props) => (
    <div>
        <Nav />
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout;