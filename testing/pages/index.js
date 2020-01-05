import Nav from '../components/Nav'

const Index = (props) => (
    <div>
        <Nav />
        <h1>First Next App!</h1>

    </div>
)


Index.getInitialProps = async function(){
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = await res.json()
    return {
        rates: rates
    }
}

export default Index;