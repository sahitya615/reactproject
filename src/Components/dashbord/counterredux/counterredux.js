import React,{Component} from 'react'
import {connect} from 'react-redux'
import Counterreduxchild from './counterreduxchild'
import Inputtext from './inputtext'

class counterRedux extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                redux
                <h1>Count:{this.props.count}</h1>
                <button onClick={this.props.onClickIncrement}>increment</button>
                <button onClick={this.props.onClickDecrement}>decrement</button>
                 <hr />
                 <Counterreduxchild />
                 <hr />
                 <Inputtext />
                </div>
        );
    }
}

 const mapStateToProps=(state)=>{
     console.log("state", state)
     return{
         count:state.count
     }
 }
 const mapDispatchToProps=(dispatch)=>{
     return{
        onClickIncrement: ()=>{
            const action={
                type:"INCREMENT"
            }
            dispatch(action)
            console.log("hey")
        },
        onClickDecrement: ()=>{
            const action={
                type:"DECREMENT"
            }
            dispatch(action)
        }

     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(counterRedux);