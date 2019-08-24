import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Components/login/login';
import Dashboard from '../Components/dashbord/dashboard';
import Addtocart from '../Components/dashbord/AddtoCart/AddtoCart'
import Incanddec from '../Components/dashbord/incanddec/incanddec'
import Tableexe from '../Components/dashbord/tableexe/tableexe'
import Countryfilter from '../Components/dashbord/countryfilter/countryfilter'
import Dropdownfilter from '../Components/dashbord/dropdownfilter/dropdownfilter'
import Promises from '../Components/dashbord/promises/promises'
import Popup from '../Components/dashbord/popup/popup'
import Counterredux from '../Components/dashbord/counterredux/counterredux'
import Examplemock from '../Components/dashbord/examplemock/examplemock'
import Funcomponent from '../Components/dashbord/functionalcomponent/funcomponent'


class router extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route exact path='/dashboard' component={Dashboard} />
                        <Route exact path='/addtocart' component={Addtocart} />
                        <Route exact path='/incanddec' component={Incanddec} />
                        <Route exact path='/Tableexe' component={Tableexe} />
                        <Route exact path='/countryfilter' component={Countryfilter} />
                        <Route exact path='/dropdownfilter' component={Dropdownfilter} />
                        <Route exact path='/promises' component={Promises} />
                        <Route exact path='/popup' component={Popup} />
                        <Route exact path='/counterredux' component={Counterredux} />
                        <Route exact path='/examplemock' component={Examplemock} />
                        <Route exact path='/funcomponent' component={Funcomponent} />



                    </Switch>
                </Router>
            </div>

        );
    }


}
export default router;
