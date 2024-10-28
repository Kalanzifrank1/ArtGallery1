
import LayOut from "./Layout/LayoutM"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import Services from "./pages/Services"
import Stories from "./pages/Stories"
import Projects from "./pages/Projects"

function App() {
  
    return(
        <BrowserRouter>
            <Routes>
              <Route element={<LayOut />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/projects" element={<Projects />} />
              </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
