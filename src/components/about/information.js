import React from 'react';
import AllChild from './allChils';
import History from './history';
import Reason from './reason';
import About from './about';

export default function Information(){
    return(
        <AllChild>
            <History />
            <Reason />
            <About/>
        </AllChild>
    )
}