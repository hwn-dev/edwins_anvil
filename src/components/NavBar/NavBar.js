import { NavLink } from 'react-router-dom'

import './NavBar.css'

export default function NavBar() {
    return (
        <div className="nav-bar">
            <div className="logo-section">
                <a href="/" className="nav-bar-link">
                    <h1>Edwin's Avil</h1>
                </a>
            </div>
            <ul>
                <NavLink to="/projects" className="nav-bar-link">
                    Projects
                </NavLink>
                <NavLink to="/about" className="nav-bar-link">
                    About
                </NavLink>
                {/* <NavLink to="/contact" className="nav-bar-link">
                    Contact
                </NavLink> */}
            </ul>
        </div>
    )
}
