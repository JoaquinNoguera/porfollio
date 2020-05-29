import React from 'react';
import Nav from '../../Components/Nav';
import Content from '../../Components/Content';

export default function () {
    return(
        <div>
            <Nav
                active ="WORK"
            />
            <Content
                  className="flex-column"
            >
                <h1>PORFOLIO</h1>
            </Content>
        </div>
    )
}