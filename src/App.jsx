import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavBar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import { ThemeProvider } from './ThemeContext';

const Blobs = lazy(() => import('./pages/Blobs'));

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Suspense fallback={null}>
        <Blobs />
      </Suspense>
      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;