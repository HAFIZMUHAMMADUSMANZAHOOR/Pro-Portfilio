// File: src/components/BlogSection.jsx

import React, { useContext } from 'react';
import img1 from '../assets/imges/project-1.jpg';
import img2 from '../assets/imges/project-2.jpg';
import img3 from '../assets/imges/project-3.jpg';
import img4 from '../assets/imges/project-4.jpg';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';


const posts = [
  {
    title: 'Top 1 JavaScript Frameworks',
    img: img1,
    excerpt: ' React.js – Developed by Meta, its a powerful library for building fast and interactive UIs',
    published: '2 days ago',
  },
  {
    title: 'About Remote Working',
    img: img2,
    excerpt: 'Remote working offers flexibility and freedom to work from anywhere while staying productive and connected.',
    published: 'a week ago',
  },
  {
    title: 'A Guide to Becoming a Full-Stack Developer',
    img: img3,
    excerpt: 'A comprehensive journey covering both frontend and backend technologies to build complete, scalable web applications.',
    published: '3 weeks ago',
  },
  {
    title: 'High Performance JavaScript',
    img: img4,
    excerpt: 'Writing optimized, efficient JavaScript code to enhance web app speed, responsiveness, and overall performance..',
    published: '1 month ago',
  },
  {
    title: 'Learn React in 24 Hours',
    img: img1,
    excerpt: 'A fast-paced, hands-on learning experience to master the fundamentals of React and build dynamic web interfaces in just one day..',
    published: '1 month ago',
  },
  {
    title: 'How to Build Desktop Apps with HTML, CSS and JavaScript',
    img:img2,
    excerpt: 'Learn to create cross-platform desktop applications using web technologies powered by frameworks like Electron.js..',
    published: '2 months ago',
  },
];

export default function Blog() {
  const{mode}=useContext(ThemeContext)
  const navigate = useNavigate()
    
    const handleNavigate = (path) => {
      navigate(path);
    };
  
  return (
    <div className={`${mode === 'dark'? 'bg-black text-white': 'bg-white text-black'}`}>
    <section className="py-16 px-4 ">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">A Blog About Software Development And Life</h2>
        <p className="text-gray-600 mb-6">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
       
      </div>
 <div className="flex justify-center">
  <button
    onClick={() => handleNavigate('/contact')}
    className="mt-4 bg-green-700 mb-7 hover:bg-green-600 text-white px-4 py-2 rounded"
  >
    Hire Me
  </button>
</div>

      <div   className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>
        {posts.map((post, idx) => (
          <div key={idx} className={` shadow rounded overflow-hidden  ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`} >
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
              <a href="#" className="text-green-600 text-sm font-medium hover:underline">Read more →</a>
              <p className="text-xs text-gray-400 mt-2">Published: {post.published}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button    onClick={()=>handleNavigate('/contact')}  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full">
          Next →
        </button>
      </div>
    </section>
    </div>
  );
}
