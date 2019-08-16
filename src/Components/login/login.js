import React, { Component } from 'react';
import { logindata } from './logindata';
import './login.css';

class login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            usernameError:"",
            passwordError:""


        }
    }


    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginValidation = (e) => {
        let usernameError = "";
        let passwordError = "";

        if(!this.state.username) {
            usernameError = "username is mandatory"
        }
        if(!this.state.password) {
            passwordError = "password is mandatory"
        }
        if(usernameError || passwordError) {
            this.setState({
                usernameError, passwordError
            })
            return false;

        }
        return true;
    }

    loginHandler = (e) => {
        e.preventDefault()
        let { username, password } = this.state;
        let isvalid=this.loginValidation();

if(isvalid){


        let loginNewData = logindata.find((user, index) => {
            if (username === user.username && password === user.password) {
                return user

            }
        })
        { loginNewData ? this.props.history.push('/dashboard') : alert("enter the curent username and password") }

    }
}


    render() {
        console.log("username", this.state.username)
        console.log("password", this.state.password)
        return (
            <div className="Login-container">
                <h1>LOGIN</h1>
                <div className="Login-form">
                    <form onSubmit={this.loginHandler}>
                        <div className="Wrapper">
                            <input type="text"
                                name="username"
                                className="inputWrapper"
                                placeholder="username"
                                onChange={this.changeHandler}

                            />
                            <div className="error">{this.state.usernameError}</div>
                        </div>
                        <div className="Wrapper">
                            <input type="password"
                                name="password"
                                className="inputWrapper"

                                placeholder="password"
                                onChange={this.changeHandler}

                            />
                            <div className="error">{this.state.passwordError}</div>
                        </div>
                        <button className="submit" >Login</button>

                    </form>

                </div>
            </div>
        );
    }


}
export default login;
