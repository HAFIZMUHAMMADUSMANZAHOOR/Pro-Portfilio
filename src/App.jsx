// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Contact from './components/contact';
import More from './components/More';
// works for More.js or More.jsx





function App() {
 
  return (
    <Router>
      <div className={`flex min-h-screen`}>

        <div className='w-[20%]'>
          <Sidebar/>
        </div>
        <div className='w-[80%]'>
          <main className="">
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/Sidebar" element={< Sidebar />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/more" element={<More />} />

            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;