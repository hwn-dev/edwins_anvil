import { NavLink } from 'react-router-dom'

import anvilLogo from '../../assets/images/anvil-logo-removebg-preview.png'

import './NavBar.css'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <ul>
                <div className="logo-section">
                    <img src={anvilLogo} alt="" />
                </div>
                <NavLink to="/" className="nav-bar-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-bar-link">
                    About
                </NavLink>
                <NavLink to="/projects" className="nav-bar-link">
                    Projects
                </NavLink>
                <NavLink to="/contact" className="nav-bar-link">
                    Contact
                </NavLink>
            </ul>
        </div>
    )
}
