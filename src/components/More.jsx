import React, { useContext } from 'react';
import img2 from '../assets/imges/project-2.jpg';
import img3 from '../assets/imges/project-3.jpg';
import img4 from '../assets/imges/project-4.jpg';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const More = () => {
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`max-w-6xl mx-auto px-4 py-12 ${mode === 'dark' ? 'bg-black text-white' : 'text-gray-800'}`}>
      {/* Client Info Section */}
      <section className={`flex flex-col md:flex-row gap-8 items-start rounded-lg shadow-md p-6 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
        <img
          src={img2}
          alt="Client"
          className="w-full md:w-1/3 h-64 object-cover rounded-lg"
        />
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold">Client Name: Jawad Jameel</h2>
          <ul className="text-sm space-y-1">
            <li><strong>🧩 Industry:</strong> Tech</li>
            <li><strong>👥 Size:</strong> 100+</li>
            <li><strong>🌐 Website:</strong> <a href="https://tiny-kashata-eb93f9.netlify.app/" className="text-blue-400 hover:underline">clientsite.com</a></li>
          </ul>
          <div className="pt-3">
            <h4 className="font-semibold text-lg">📌 Project Requirements</h4>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
              <li>Build responsive user interface and smooth UX.</li>
              <li>Integrate with secure backend APIs.</li>
              <li>Deploy and optimize for performance.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study Content Sections */}
      <div className="space-y-14 mt-12">
        <Section title="Project Overview" mode={mode} />
        <Section title="The Challenge" mode={mode} />
        <Section title="The Approach & Solution" mode={mode}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img src={img2} alt="Planning" className="rounded-lg shadow-md" />
            <img src={img3} alt="Wireframes" className="rounded-lg shadow-md" />
          </div>
        </Section>
        <ResultsSection mode={mode} />
        <Testimonial mode={mode} />
        <HireMe handleNavigate={handleNavigate} mode={mode} />
      </div>
    </div>
  );
};

const Section = ({ title, children, mode }) => (
  <section>
    <h3 className={`text-2xl font-semibold mb-3 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>{title}</h3>
    <p className={`text-sm leading-relaxed ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
      This tech website was developed for my client, Mery, with a focus on modern design and user-friendly experience. It offers the latest tech updates, reviews, and informative content. The site features a responsive layout, dynamic homepage, and categorized articles. Built with modern web technologies, it ensures speed, security, and scalability.
    </p>
    {children}
  </section>
);

const ResultsSection = ({ mode }) => (
  <section>
    <h3 className={`text-2xl font-semibold mb-5 ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>The Results</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      <ResultBox mode={mode} title="Efficiency" value="20% ↑" description="Improved internal operations and response time." />
      <ResultBox mode={mode} title="Customer Satisfaction" value="14% ↑" description="Better UI/UX increased retention rates." />
      <ResultBox mode={mode} title="Sales Generated" value="$130K ↑" description="Boost in product sales after redesign." />
      <ResultBox mode={mode} title="Overall Cost" value="20% ↓" description="Lower maintenance costs post-launch." />
    </div>
    <p className={`mt-5 text-sm ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
      These metrics reflect the tangible benefits achieved after implementing our solutions.
    </p>
  </section>
);

const ResultBox = ({ title, value, description, mode }) => (
  <div className={`p-4 rounded-lg shadow hover:shadow-lg transition duration-200 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
    <h4 className="font-medium">{title}</h4>
    <p className="text-xl font-bold text-green-500">{value}</p>
    <p className={`text-sm mt-1 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>{description}</p>
  </div>
);

const Testimonial = ({ mode }) => (
  <section className={`p-6 rounded-lg shadow-md mt-10 ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
    <h3 className="text-2xl font-semibold mb-3">Client Testimonial</h3>
    <p className={`italic text-sm leading-relaxed ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
      "Usman is a brilliant software engineer! He delivered our project on time with excellent code quality. Highly recommend!"
    </p>
    <p className={`text-sm font-semibold mt-2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>– Jawad, CEO Delta Code</p>
  </section>
);

const HireMe = ({ handleNavigate, mode }) => (
  <section className={`text-center py-12 mt-12 rounded-lg shadow ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
    <h2 className="text-3xl font-bold mb-4">Want me to help with your project?</h2>
    <p className={`mb-6 max-w-xl mx-auto px-4 ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
      If you take on freelance work, you can use this section to prompt any potential clients to get in touch with you with their project requirements.
    </p>
    <button
      onClick={() => handleNavigate('/contact')}
      className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded flex items-center mx-auto"
    >
      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.94 6.94a1.5 1.5 0 012.12 0L10 11.88l4.94-4.94a1.5 1.5 0 112.12 2.12l-6 6a1.5 1.5 0 01-2.12 0l-6-6a1.5 1.5 0 010-2.12z" />
      </svg>
      Hire Me
    </button>
  </section>
);

export default More;
