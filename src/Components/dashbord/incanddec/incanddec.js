import React, { Component } from 'react'

class incanddec extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }
    incrementHandler = () => {
let{count}=this.state
this.setState({count:count+1})
    }
    decrementHandler = () => {
let{count}=this.state
this.setState({count:count-1})
    }

    render() {
        return (
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={this.incrementHandler}>inc</button>
                <button onClick={this.decrementHandler}>dec</button>
            </div>
        )
    }
}
export default incanddec;