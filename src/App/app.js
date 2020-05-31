import React from 'react';
import { 
    HashRouter, 
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
            <HashRouter>
                <Route path="/" render= {({ location }) => {
                console.log(location.pathname);
                return <TransitionGroup>
                    <CSSTransition 
                        appear={true}
                        key={location.pathname}
                        timeout={1300}
                        classNames="transition-page" 
                    >  
                        <Switch location={location}>
                            <Route exact path="/" component={Home} key="/"/>
                            <Route exact path="/porfolio" component={Work} key="/porfolio"/>
                            <Route exact path="/contacto" component={Contact} key="/contacto"/>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                }}/>
            </HashRouter>
        );
    }
}

