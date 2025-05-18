// File: src/components/Resume.jsx

import React, { useContext, useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useReactToPrint } from 'react-to-print';
import { ThemeContext } from '../context/ThemeProvider';

export default function Resume() {
  const {mode}=useContext(ThemeContext)
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: 'Muhammad_Usman_Resume'
  });

  return (
    <div className={`${mode === 'dark'? 'bg-black text-white': 'bg-white text-black'}`}>
    <div className="max-w-5xl mx-auto p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Online Resume</h2>
        <button
          onClick={handlePrint}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded flex items-center justify-center gap-2 mx-auto mt-3"
        >
          <FaFilePdf className="text-xl" /> Download PDF Version
        </button>
      </div>

      <div ref={resumeRef} className={`${mode === 'dark'? 'bg-black text-white': 'bg-white text-black'}`}>
        <header className="border-b pb-4 mb-6">
          <h1 className="text-4xl font-bold text-green-500">Muhammad Usman</h1>
          <h2 className="text-blue-600 text-lg">Senior Software Engineer</h2>
          <div className="flex flex-wrap items-center text-sm gap-4 mt-2">
            <div className="flex items-center gap-2"><FaPhone /> (+92) 3090445194</div>
            <div className="flex items-center gap-2"><FaEnvelope /> usmanburewala6362@gmail.com</div>
            <div className="flex items-center gap-2"><FaLinkedin /> <a className="text-blue-600 underline" href="https://www.linkedin.com/in/hafiz-muhammad-usman-zahoor-040bb4262/">LinkedIn</a></div>
            <div className="flex items-center gap-2"><FaGithub /> <a className="text-blue-600 underline" href="https://github.com/HAFIZMUHAMMADUSMANZAHOOR">GitHub</a></div>
          </div>
        </header>

        <section className="mb-6">
          <h3 className="text-xl font-bold border-b mb-2">SUMMARY</h3>
          <p>
            I am a passionate software engineer with practical experience in Machine Learning,
            Deep Learning, web design, and React. I have developed a solid foundation in
            various programming languages and frameworks, along with hands-on experience in
            project management and web development. My educational background, coupled with
            internships, has equipped me with the skills necessary to excel in the tech industry.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold border-b mb-2">EXPERIENCE</h3>
          <h4 className="font-semibold">Experience Designer</h4>
          <p className="text-blue-600 font-semibold">CODEING FIRST  LAB TECH SCHOOL G IT SOLUTION</p>
          <p className="text-sm flex items-center gap-2 text-gray-600">
            <MdLocationOn /> 06/2023 - 10/2023, Bahawalpur, Pakistan
          </p>
          <ul className="list-disc list-inside mt-1 text-sm">
            <li>Gained hands-on experience in web designing during an internship.</li>
            <li>Mastered HTML, CSS, and JavaScript to create user-friendly websites.</li>
            <li>Developed project management skills, including: Task coordination, Timeline management, Team collaboration.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-bold border-b mb-2">EDUCATION</h3>
          <p className="font-semibold">Bachelors of Science in Software Engineering</p>
          <p className="text-blue-600 font-semibold">The Islamia University of Bahawalpur</p>
          <p className="text-sm flex items-center gap-2 text-gray-600">
            <MdLocationOn /> 09/2021 - Present, Bahawalpur, Pakistan
          </p>
          <div className="mt-2">
            <p className="font-semibold">Final Year Project</p>
            <p className="text-sm italic text-gray-700">Bone Fracture Detection and Advisory System</p>
            <p className="text-sm mt-1">
              The system uses a simple website to upload bone images and show results, with a backend that processes images and connects to an AI model.
              A deep learning model analyzes the images to detect fractures accurately. It combines all parts to quickly identify fractures and suggest treatments.
              Doctors can view fracture details and advice on the website for better patient care.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold border-b mb-2">LANGUAGES</h3>
            <p>Urdu - <span className="text-blue-500">●●●●●</span></p>
            <p>English - <span className="text-blue-500">●●●○○</span></p>

            <h3 className="text-xl font-bold border-b mt-6 mb-2">SKILLS</h3>
            <div className="flex flex-wrap gap-2 text-sm"  >
              <span className="bg-gray-100 px-2 py-1 rounded">Deep Learning</span>
              <span className="bg-gray-100 px-2 py-1 rounded">HTML & CSS</span>
              <span className="bg-gray-100 px-2 py-1 rounded">JavaScript/React</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Machine Learning</span>
              <span className="bg-gray-100 px-2 py-1 rounded">Python</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold border-b mb-2">PROJECTS</h3>
            <div className="mb-2">
              <p className="font-semibold">Salary Prediction System</p>
              <p className="text-sm">Salary prediction system using Machine Learning</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Image Classification System</p>
              <p className="text-sm">Image classification system using deep learning</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Fashion Designing Website</p>
              <p className="text-sm">Fashion Designing Frontpage using HTML, CSS and JavaScript</p>
            </div>
            <div className="mb-2">
              <p className="font-semibold">Hybrid Recommendation System</p>
              <p className="text-sm">Hybrid Recommendation System Using Machine Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
