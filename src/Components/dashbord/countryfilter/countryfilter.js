import React,{Component} from'react'
import {countryDetails} from './mockdata'
import  './countryfilter.css'

class countryfilter extends Component{
    constructor(){
        super();
        this.state={
countryCode:"",
countryName:"USA",
countryData:countryDetails
        }
    }
    
    handleSelect =(e) => {
    console.log(e.target.value)
    let{countryData} = this.state
    let selectcountrycode = e.target.value
    countryData.filter((item,index) => {
        if(selectcountrycode===item.countryCode){
            this.setState({countryCode:item.countryCode,countryName:item.countryName})
        }
    })
    }
    
    render() {
        // console.log(countryDetails)
        console.log(this.state.countryCode)
        console.log(this.state.countryName)


        
        return (
            <div className="dropdown-container">
                
                <select className= "select-item" onChange={this.handleSelect}>
                    {
                        countryDetails.map((item,index)=>{
                return <option key={index}>{item.countryCode}</option>
                        })

                    }
                </select>
                <h5>selectname:{this.state.countryName}</h5>

          </div>
        )
    }
}
export default countryfilter;

