import React from 'react';
import Navbar from '../Component/navbar';
import Hi from '../screen/Hi';
import Projects from '../screen/projects';
import './style.scss';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        const projectsRef = React.createRef();
        const hiRef = React.createRef();
        this.state = {
            projectsRef,
            hiRef
        }

    }

    goProject = () => {
        const {projectsRef} = this.state
        projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    goHi = () => {
        const {hiRef} = this.state
        hiRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    
    render(){    
        const {projectsRef, hiRef} = this.state;
        return(
            <div id="app-container">
            <Navbar
                goProject={this.goProject}
                goHi={this.goHi}
            />
            <div
                ref = {hiRef}
            >
            <Hi
                goProject={this.goProject}
                />
            </div>
            
            <div
                ref = {projectsRef}
            >
            <Projects/>
            </div>
        </div>
        );
    }
}
    