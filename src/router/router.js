import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from '../Components/login/login';
import Dashboard from '../Components/dashbord/dashboard';
import Addtocart from '../Components/dashbord/AddtoCart/AddtoCart'
import Incanddec from '../Components/dashbord/incanddec/incanddec'
import Tableexe from '../Components/dashbord/tableexe/tableexe'
import Countryfilter from '../Components/dashbord/countryfilter/countryfilter'


class router extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/addtocart' component={Addtocart} />
                        <Route exact path='/incanddec' component={Incanddec} />
                        <Route exact path='/Tableexe' component={Tableexe} />
                        <Route exact path='/countryfilter' component={Countryfilter} />



                    </Switch>
                </Router>
            </div>

        );
    }

    
}
export default router;
