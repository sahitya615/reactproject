import React, { Component } from 'react'
import {connect}  from 'react-redux'

class inputtext extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        console.log("props", this.props.nameChange)
        return (
            <div>
                <input onChange={this.props.ChangeHandler} />
                <h1>{this.props.nameChange}</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        nameChange:state.nameChange
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        ChangeHandler: (e)=>{
            const action={
                type:"CHANGENAME", text:e.target.value
            }
            dispatch(action)
            console.log("hey")
        },

        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(inputtext);