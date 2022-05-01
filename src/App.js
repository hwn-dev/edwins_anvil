import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Page Imports
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// Component Imports
import NavBar from './components/NavBar/NavBar'

function App() {
    return (
        <>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
