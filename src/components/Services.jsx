import React, { useContext } from 'react';
import { FaPaintBrush, FaFlask, FaCode, FaServer } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeProvider';

export default function Services() {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Services & Pricing</h2>

        <p className="max-w-3xl mx-auto mb-4 text-lg text-gray-600 dark:text-gray-300">
          With 2+ years of hands-on experience, I deliver robust full-stack web solutions and intelligent AI applications. Explore my <a href="#portfolio" className="text-green-600 dark:text-green-400 underline font-medium">portfolio</a> or <a href="#resume" className="text-green-600 dark:text-green-400 underline font-medium">resume</a> for real-world projects.
        </p>

        <p className="max-w-2xl mx-auto mb-12 text-base text-gray-600 dark:text-gray-300">
          Available for freelance opportunities. Request a custom quote or choose from the professionally packaged development services listed below.
        </p>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 max-w-7xl mx-auto">
          <ServiceCard
            icon={<FaPaintBrush className="text-5xl text-green-500 dark:text-green-400 mb-4" />}
            title="UI/UX Web Design"
            description="Modern and responsive design using HTML, CSS, and Tailwind. Prioritizing user engagement and visual clarity for all screen sizes."
            price="$100+"
          />

          <ServiceCard
            icon={<FaCode className="text-5xl text-green-500 dark:text-green-400 mb-4" />}
            title="Frontend Development"
            description="React-powered interactive UIs. Seamless animations, reusable components, and optimized performance for web apps."
            price="$150+"
          />

          <ServiceCard
            icon={<FaServer className="text-5xl text-green-500 dark:text-green-400 mb-4" />}
            title="Backend with Flask"
            description="Build and deploy REST APIs using Flask & Python. Includes DB integration, auth systems, error handling, and Docker-ready setups."
            price="$200+"
          />

          <ServiceCard
            icon={<FaFlask className="text-5xl text-green-500 dark:text-green-400 mb-4" />}
            title="Machine Learning Systems"
            description="End-to-end ML pipelines for predictions, automation, and analytics. Hands-on deployment and results-driven design."
            price="$300+"
          />

          <ServiceCard
            icon={<FaFlask className="text-5xl text-green-500 dark:text-green-400 mb-4" />}
            title="Deep Learning Models"
            description="Advanced DL projects with CNN, RNN, transformers. Ideal for vision, health diagnostics, and recommendation solutions."
            price="$350+"
          />
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, price }) {
  return (
    <div className="bg-white dark:bg-gray-800 hover:shadow-2xl transition duration-300 ease-in-out p-6 sm:p-8 rounded-2xl text-left border border-gray-200 dark:border-gray-700 shadow-md">
      <div className="text-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-2 mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-4 leading-relaxed">
        {description}
      </p>
      <p className="text-green-600 dark:text-green-400 font-bold text-center text-lg">{price}</p>
    </div>
  );
}
