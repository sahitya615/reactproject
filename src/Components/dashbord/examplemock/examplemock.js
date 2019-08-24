import React,{Component} from 'react'
import {connect} from 'react-redux'

class examplemock extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        console.log("data", this.props.data)
        return(
            <div>
                {
                 this.props.data.map((item,index)=>{
                     return(
                         <div key={index}>
                             <li>{item.name} || {item.age} || {item.cars.car1} || {item.cars.car2} </li>
                         </div>
                     )
                 })
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log("state", state)
    return{
data:state.data
    }
}

export default connect(mapStateToProps)(examplemock);