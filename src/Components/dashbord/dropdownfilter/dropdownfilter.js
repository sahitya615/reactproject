import React,{Component} from 'react'
import {companies} from './dropdownmockdata'
import './dropdownfilter.css'

class dropdownfilter extends Component{
    constructor(){
        super();
        this.state={
            companies:companies,
            filteredcompanies:[]
        }    
    }
    handleSelect=(e) =>{
    // console.log(e.target.value)
    let {companies}=this.state
    let selectName=e.target.value
    let filteredcompanies=companies.filter((item,index)=>(selectName===item.category))
    this.setState({filteredcompanies})
    }


    componentWillMount=() => {
        this.setState({filteredcompanies:companies})
    }
    render() {
        console.log(this.state.companies)
        
        return(
            <div className="dropfilter-container">
                <div className="dropdown-selector">
                    <select className="selector" onChange={this.handleSelect}>
                        <option>Finance</option>  
                        <option>Retail</option>  
                        <option>Auto</option>  
                        <option>Technology</option>  

                        
                    </select>
                </div>


                <table className="table-list">
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>CATEGORY</th>
                        <th>START</th>
                        <th>END</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.filteredcompanies.map((item,index)=>{
                                return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                    </tr>

                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default dropdownfilter;