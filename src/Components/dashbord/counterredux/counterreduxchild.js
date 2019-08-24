import React,{Component} from 'react'
import {connect} from 'react-redux'


class counterreduxchild extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        console.log("childcountername",this.props.count)
        return(
            <div>child component
                <h1>count:{this.props.count}</h1>
                
            </div>
        );
    }
    
}
const mapStateToProps=(state)=>{
    return{
        count:state.count
    }
}

export default connect(mapStateToProps)(counterreduxchild);