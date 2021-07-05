import React from 'react';
import About from './about';
import AllChildren from './allChildren';
import Delivery from './delivery';
import ReturnPolicy from './return';

export default function AllInformation(){

return(
    <>
    <AllChildren>
        <About />
        <Delivery />
        <ReturnPolicy />
    </AllChildren>
    </>
)    
}