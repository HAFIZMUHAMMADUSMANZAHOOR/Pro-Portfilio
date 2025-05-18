import React, { useContext, useState } from 'react';
import axios from 'axios'; // install axios if not installed
import { ThemeContext } from '../context/ThemeProvider';
// import { ThemeContext } from '../context/ThemeProvider';


export default function Contact() {
  const { mode } = useContext(ThemeContext)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="py-12 px-4 max-w-6xl mx-auto    ">
        {/* ...heading & icons same as before... */}
        <div className={`p-6 shadow rounded-md ${mode === 'dark' ? 'bg-gray-900' : 'bg-gray-200'}`}>
          <h3 className="text-xl font-semibold mb-4 text-center">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Name" className="border border-gray-300 px-4 py-2 rounded w-full" />
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" className="border border-gray-300 px-4 py-2 rounded w-full" />
            </div>

            <select name="service" value={formData.service} onChange={handleChange}
              className="border border-gray-300 px-4 py-2 rounded w-full">
              <option value="">Select a service package...</option>
              <option>Website Design</option>
              <option>Web App Development</option>
              <option>Mobile App UI/UX</option>
              <option>Backend API Integration</option>
            </select>

            <textarea rows="6" name="message" value={formData.message} onChange={handleChange}
              placeholder="Enter your message" className="border border-gray-300 px-4 py-2 rounded w-full" />

            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
              Send Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
