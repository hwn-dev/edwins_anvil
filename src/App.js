// Page Imports
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// Component Imports
import NavBar from './components/NavBar/NavBar'

function App() {
    return (
        <>
            <NavBar />
            <Home />
            <Projects />
            <About />
        </>
    )
}

export default App
