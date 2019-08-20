import React, { Component } from 'react'
import './popup.css'

class popup extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    handlePopupmodel = () => {
        let { isOpen } = this.state
        this.setState({ isOpen: !isOpen })
    }
    render() {
        console.log(this.state.isOpen)
        return (
            <div className="popupmodel-container">
                <div className="formpopup-model">
                    <button className="isOpen-btn" onClick={this.handlePopupmodel}>popup</button>
                    {this.state.isOpen ? <div className="bg-model">

                        <div className="model-content">
                            <div className="close" onClick={this.handlePopupmodel}> +</div>
                            <img className="form-img" src="https://images.freeimages.com/images/premium/previews/5108/51082762-cartoon-student.jpg" />
                            <form className="form-popup">
                                <input
                                className ="input-wrapper"
                                type="text"
                                placeholder="name"
                                 />
                                 <input
                                className ="input-wrapper"
                                type="email"
                                placeholder="email"
                                 />
                                 <button className="submit-btn">SUBMIT</button>
                            </form>

                        </div>

                    </div> : null

                    }

                </div>
            </div>
        )
    }

}
export default popup;