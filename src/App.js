import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import { Analytics } from "@vercel/analytics/react"
import About from './components/about';
import Contact from './components/contact';
import NotFound from './components/notfound';
import Projects from './components/projects';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Headers from './components/headers';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Analytics/>
      <Headers />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<About />} />
        </Routes>

      <Footer />
    </div>
  );
}

export default App;
