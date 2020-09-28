import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

    const closeMobileMenu = () => setClick(false);
    const handleClick = () => setClick(!click);


    return (
         <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img className="iconn" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcStvFifrPgYt4MONxKL8WgxEolksyGaQRPbKg&usqp=CAU"/>
                        My Story
                        <i className="fab fa-type-3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/posts' className='nav-links' onClick={closeMobileMenu}>Posts</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
export default Navbar;