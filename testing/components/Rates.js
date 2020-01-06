import React, { Component } from 'react';

class Rates extends Component {
    constructor(props){
        super(props)
        this.state = {
            currency: parseFloat(1).toFixed(2),
            // currentTime: ''
        }
    }

    updateCurrency = (event) => {
        this.setState({
            currency: parseFloat(event.target.value).toFixed(2),
            // currentTime: this.updateTime(this.props.rates.time_last_updated)
        })
    }

    // updateTime = async (secs) => {
    //     let time = await new Date(1970, 0, 1)
    //     time.setSeconds(secs)
    //     return time
    // }

    // componentDidMount(){
    //     this.setState({
    //         currentTime: this.updateTime(this.props.rates.time_last_updated)
    //     })
    // }

    render(){
        return(
            <div>
                {/* <h4>Current time: {this.state.currentTime}</h4> */}
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
                <style jsx>{`
                    select {
                        margin-left: 1vw;
                    }
                `}</style>
            </div>
        )
    }
}

export default Rates;