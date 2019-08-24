import React, { Component } from 'react'
import './popup.css'

class popup extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            name:"",
            email:"",
            details:[]
        }
    }

    handlePopupmodel = () => {
        let { isOpen } = this.state
        this.setState({ isOpen: !isOpen })
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = (e) => {
        e.preventDefault()
        let {name,email,details} = this.state;
        details.push({name,email})
        this.setState({details})
    }
 
    render() {
        // console.log(this.state.isOpen)
        // console.log("name", this.state.name)
        // console.log("email", this.state.email)
        console.log("details", this.state.details)
        return (
            <div className="popupmodel-container">
                <div className="formpopup-model">
                    <button className="isOpen-btn" onClick={this.handlePopupmodel}>popup</button>
                    {this.state.isOpen ? <div className="bg-model">

                        <div className="model-content">
                            <div className="close" onClick={this.handlePopupmodel}> +</div>
                            <img className="form-img" src="https://images.freeimages.com/images/premium/previews/5108/51082762-cartoon-student.jpg" />
                            <form onSubmit={this.submitHandler} className="form-popup">
                                <input onChange={this.changeHandler}
                                className ="input-wrapper"
                                type="text"
                                name="name"
                                placeholder="name"
                                 />
                                 <input onChange={this.changeHandler}
                                className ="input-wrapper"
                                type="email"
                                name="email"
                                placeholder="email"
                                 />
                                 <button type="submit" className="submit-btn">SUBMIT</button>
                            </form>

                        </div>

                    </div> : null

                    }

                </div>
                <div className="popup-open">
                <div className={this.state.isOpen?"hide":"show"}>
                <ul >
                {this.state.details.map((item,index)=>{
                    // console.log("ïtem",item)
                    return <li>{item.name}||{item.email}</li>
                })}
                </ul>
                </div>
</div>
            </div>
        )
    }

}
export default popup;