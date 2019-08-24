import React from 'react'
import {connect} from 'react-redux'

const funcomponent = (props) => {
    console.log("props",props.data)
    return (
        <div>
  {props.data.map((item,index)=>{
      return(
          <div key={index}>
              <li>{item.name}</li>
          </div>
      )
  })}
        </div>
    )
}
const mapStateToProps=(state)=>{
    return{
      data:state.data
    } 
}
export default connect(mapStateToProps)(funcomponent);
