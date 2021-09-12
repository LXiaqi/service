import React from "react";
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './../App';
import Admin from '../pages/admin/admin'
import Login from '../pages/login/login'
import Home from './../pages/home/home'
class IRouter extends React.Component {
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact  path='/' component={Login}></Route>
                        <Route path='/admin' render={()=> 
                            <Admin>
                                <Route path='/admin/home'  component={Home}></Route>
                            </Admin>
                        } ></Route>
                    </Switch>
                </App>
            </Router>
        )
    }
}
export default IRouter