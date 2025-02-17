import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

class dashboard extends Component {
    render() {
        return (
            <div className="dashboard-container">
                <h1>Dashboard</h1>
                <ul className="row">
                    <div className="col-4">
                        <Link to='/addtocart'>
                            <li>Addtocart</li>
                        </Link>
                        <Link to='/countryfilter'>
                            <li>countryfilter</li>
                        </Link>
                        <Link to='/popup'>
                            <li>popup</li>
                        </Link>
                        <Link to='/examplemock'>
                            <li>examplemock</li>
                        </Link>



                    </div>
                    <div className="col-4">
                        <Link to='/incanddec'>
                            <li>incanddec</li>
                        </Link>
                        <Link to='/dropdownfilter'>
                            <li>dropdownfilter</li>
                        </Link>
                        <Link to='/counterredux'>
                            <li>counterredux</li>
                        </Link>
                        <Link to='/lazyloading'>
                            <li>lazyloading</li>
                        </Link>



                    </div>
                    <div className="col-4">
                        <Link to='/tableexe'>
                            <li>tableexe</li>
                        </Link>
                        <Link to='/promises'>
                            <li>promises</li>
                        </Link>
                        <Link to='/funcomponent'>
                            <li>funcomponent</li>
                        </Link>




                    </div>






                </ul>

            </div>
        );
    }


}
export default dashboard;
