import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './AddtoCart.css'


class addtocart extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            names: []

        }
    }
    changeHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    submitHandler = () => {
        let { name, names } = this.state
        names.push(name)
        this.setState({ names }, () => { this.resetFeildHandler() })
    }
    removeHandler = (ind) => {
        let { names } = this.state
        let removeItems = names.filter((name, i) => i !== ind)
        this.setState({ names: removeItems })
    }
    resetFeildHandler = () => {
        this.setState({ name: "" })
    }

    render() {
        // console.log("name",this.state.name)
        console.log("names", this.state.names)
        return (
            <div className="addtocart-container">
               <div><Link to ="/dashboard"> <button className="back-btn">back</button></Link></div>
                <input className="added-name" name="name" value={this.state.name} type="text" onChange={this.changeHandler} />
                <button className="add-btn" onClick={this.submitHandler}>add</button>
                <ul className="list-items">
                    {
                        this.state.names.map((name, index) => {
                            return <li className="item" key={index}>{name}<span className="spaner"><button className="remove-btn" onClick={() => this.removeHandler(index)}>remove</button></span></li>

                        })
                    }
                </ul>


            </div>
        );
    }
}

export default addtocart;
