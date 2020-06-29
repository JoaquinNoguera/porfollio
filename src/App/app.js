import React, { lazy, Suspense } from 'react';
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
import Page from '../screens/page';
import NotFound from '../screens/not-found';
import './style.scss';

export default class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Route render= {({ location }) => {
                let add = location.pathname.substr(10);
                return <TransitionGroup>
                    <CSSTransition 
                        appear={ true }
                        key={ location.pathname }
                        timeout={ 951 }
                        classNames="transition-page" 
                    >  
                        <Switch location={ location }>
                            <Route exact path="/" component={ Home } key="/"/>
                            <Route exact path="/porfolio" component={ Work } key="/porfolio"/>
                            <Route exact path="/porfolio/:name" component={Page} key={`/porfolio/${add}`}/>
                            <Route exact path="/contacto" component={ Contact } key="/contacto"/>
                            <Route component={NotFound} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                }}/>
            </HashRouter>
        );
    }
}

