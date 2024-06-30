import React from 'react';

const About = () => {
  return (
    <div id='about' className="bg-gray-800 text-white min-h-screen p-6 md:p-12">
      <div className="about-container flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-16">
  
        <div className="about-heading flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg">
          <img
            src="Assets/web-developer.png"
            className="w-72 h-72 rounded-lg mb-4 transition-transform hover:translate-y-[-5px] lg:relative lg:top-10"
            alt="Yash Medhane"
          />
          <h2 className="text-4xl font-bold text-emerald-400 lg:relative lg:top-10">About Me</h2>
        </div>
        
        <div className="about-content flex-1 bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                Currently pursuing a B.Tech in IT at K.K.Wagh College of Engg, with a{' '}
                <span className="text-emerald-400 font-bold">9.33</span> SGPA. Consistently ranked 2nd in my class, demonstrating strong academic performance and a solid understanding of IT principles.
              </p>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                Scored <span className="text-emerald-400 font-bold">74.84%</span>, showcasing consistent dedication to academic excellence and a strong foundation for higher education pursued at Janta English School & Jr College, Dindori.
              </p>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                Experienced in <span className="text-emerald-400 font-bold">leadership</span> roles, particularly as a team leader during Project-Based Learning (PBL) activities. Successfully managed a team while serving as a backend developer.
              </p>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                Seamlessly integrating MongoDB, Express.js, React, and Node.js to create dynamic web solutions, enriched by hands-on <span className="text-emerald-400 font-bold">freelance</span> experience in web development.
              </p>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                Certified for fundamental concepts and methodologies in business analysis. Acquired skills and overview about the day-to-day work of <span className="text-emerald-400 font-bold">business analysis</span>.
              </p>
            </li>
            <li className="bg-gray-700 p-4 rounded-md shadow-md transition-transform hover:scale-105">
              <p>
                <span className="text-emerald-400 font-bold">Java programming language certification</span> received from the program of IIT Bombay. Proficient in Java, a widely-used language for developing diverse applications and software solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
