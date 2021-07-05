import React from 'react';
import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    <Link to="/" className="navbar-brand">Shopping</Link>
                    
                    <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
                        <li className="navbar-item" ><Link to="/" className="nav-link">Shop</Link></li>
                        <li className="navbar-item"><Link to="/basket" className="nav-link">My cart</Link></li>
                        <li className="navbar-item"><Link to="/basket" className="nav-link"><i className="bi bi-cart">shopping_cart</i></Link></li>
                        <li className="navbar-item"><Link to="/finalPayment" className="nav-link">Payment</Link></li>
                    </ul>
                </div>
                
            </nav>
           
   
        
    )
}

