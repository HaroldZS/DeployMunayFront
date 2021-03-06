import React from 'react';
import '../App'
import logo from '../img/logoUmss.jpg'
import '../css/nav.css'

class Navigation extends React.Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" className="img-fluid logou" />
                </a>
            
                <div className="collapse navbar-collapse ms-lg-3" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Acerca de </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  active" href="#">Contactanos </a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navigation;