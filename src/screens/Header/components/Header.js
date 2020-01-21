import React from 'react';
import logo from '../../../images/logo.svg';
import { NavLink, Link } from 'react-router-dom';
// import Navbar from '../../Navbar/components/Navbar';
import './Header.sass';

const Header = () => {
    return (
        <div className="d-flex">
            <div className="d-flex">
                <div className="logo-block">
                    <Link to="/" className="d-flex--fullcenter">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>jagen</h1>
                    </Link>
                </div>
                
                <div className="navbar d-flex">
                    <div className="d-flex">
                        <ul className="d-flex justify-content--between">
                            <li>
                                <Link  to="/">главная</Link>
                            </li>
                            <li>
                                <NavLink activeClassName="navbar__link--active"  to="/about">о компании</NavLink >
                            </li>
                            <li>
                                <NavLink activeClassName="navbar__link--active" to="/product">продукция</NavLink >
                            </li>
                            <li>
                                <Link to="/">производство</Link>
                            </li>
                            <li>
                                <Link to="/">доставка</Link>
                            </li>
                            <li>
                                <Link to="/">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/">контакты</Link>
                            </li>
                        </ul>
                        <a className="callTo" href="tel:+79991264417">+7 999 126 44 17</a>
                        <div className="langs">
                            <button>ru</button>/<button>eng</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;