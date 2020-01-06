
import Fetch from "isomorphic-unfetch";
import Layout from '../components/Layout'

const Index = (props) => (
    <Layout>
        <h1>First Next App!</h1>

    </Layout>
)


Index.getInitialProps = async function(){
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = await res.json()
    return {
        rates: rates
    }
}

export default Index;