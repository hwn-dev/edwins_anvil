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
                <a href="#projects" className="nav-bar-link">
                    Projects
                </a>
                <a href="#about" className="nav-bar-link">
                    About
                </a>
                {/* <NavLink to="/contact" className="nav-bar-link">
                    Contact
                </NavLink> */}
            </ul>
        </div>
    )
}
