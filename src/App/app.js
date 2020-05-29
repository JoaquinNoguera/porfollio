import React from 'react';
import { 
    BrowserRouter, 
    Switch, 
    Route
} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import Home from '../screens/home';
import Work from '../screens/work';
import Contact from '../screens/contact';
import './style.scss';

export default class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Route path="/" render= {({ location }) => {
                console.log(location.key);
                return <TransitionGroup>
                    <CSSTransition 
                        appear={true}
                        key={location.key}
                        timeout={1300}
                        classNames="transition-page" 
                    >  
                        <Switch location={location}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/porfolio" component={Work}/>
                            <Route exact path="/contacto" component={Contact}/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                }}/>
            </BrowserRouter>
        );
    }
}

