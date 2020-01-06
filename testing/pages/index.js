
import Fetch from "isomorphic-unfetch";
import Layout from '../components/Layout'
import Rates from '../components/Rates'



const Index = (props) => (
    <Layout>
        <h1>Currency Exchange Rates</h1>
        <Rates rates={props.rates}/>
        <style jsx>{`
            h1, {
                font-family: 'Open Sans';
                color: grey
            }
      `}</style>
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