import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../screens/home';
import './style.scss';

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
    