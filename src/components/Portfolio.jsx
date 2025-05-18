// File: src/components/Portfolio.jsx

import React, { useContext, useState } from 'react';
import img1 from '../assets/imges/project-1.jpg';
import img2 from '../assets/imges/project-2.jpg';
import img3 from '../assets/imges/project-3.jpg';
import img4 from '../assets/imges/project-4.jpg';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';


const allProjects = [
  { id: 1, client: 'Google', image: img1, category: 'FYP' },
  { id: 2, client: 'Dropbox', image: img2, category: 'ML Project' },
  { id: 3, client: 'Google', image: img3, category: 'ML Project' },
  { id: 4, client: 'Startup Hub', image: img4, category: 'Frontend' },
  { id: 5, client: 'SalesForce', image: img1, category: 'Backend' },
  { id: 6, client: 'Uber', image: img2, category: 'ML Project' },
  { id: 7, client: 'Lyft', image: img3, category: 'Frontend' },
  { id: 8, client: 'GitLab', image: img4, category: 'Backend' },
];

const categories = ['All', 'FYP', 'ML Project', 'Frontend', 'Backend'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const { mode } = useContext(ThemeContext)

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);
  const navigate = useNavigate()

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`${mode === 'dark'? 'bg-black text-white': 'bg-white text-black'}`}>
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <div className="text-center  ">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="mt-2 max-w-xl mx-auto">
            Welcome to my online portfolio! I'm a passionate and detail-oriented developer focused on creating clean, user-friendly, and efficient digital experiences. Whether you need help building a web app, designing a sleek UI, or solving complex tech problems
          </p>
          <button onClick={() => handleNavigate('/contact')} className="mt-4 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded">
            Hire Me
          </button>
        </div>

        <div className="flex justify-center gap-4 mt-10 border-b border-gray-200 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1 border-b-2 ${active === cat ? 'border-green-500 text-green-600' : `border-transparent ${mode === 'dark'? 'text-gray-300': 'text-gray-600'}`}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {filtered.map(({ id, client, image }) => (
            <div key={id} className={`flex shadow rounded overflow-hidden ${mode === 'dark'? 'bg-gray-900':'bg-gray-200'}`}>
              <img src={image} alt="project" className="w-1/3 h-auto object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Bone Fracture Detection and Advisory System</h3>
                <p className="text-sm mt-1">
                  A smart and user-friendly platform that uses machine learning to detect bone fractures from X-rays and provides expert advice, treatment plans, and detailed analysis — all in one place.


                </p>
                <p className="text-sm mt-2">Client: <span className="text-gray-600">{client}</span></p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
