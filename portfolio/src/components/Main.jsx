import React from 'react';
import skill from './skillApi';

const Main = () => {
  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div id='home' className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row-reverse justify-around items-center">
        <div className="relative my-image mt-8 md:mt-0">
        <img
  src="Assets/image.png"
  className="w-96 h-96 md:w-80 md:h-80 rounded-full border-4 border-teal-500 dark:border-coral-400 shadow-lg hover:shadow-red-2xl hover:shadow-teal-500/50 dark:hover:shadow-coral-400/50 transition-shadow duration-300"
  alt="Yash Medhane"
/>

        </div>
        <div className="my-24 intro-container max-w-2xl text-center md:text-left">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-teal-500 dark:text-coral-400 lg:text-4xl animate-pulse" style={{fontFamily:'cursive'}}>He/Him</span>
            </h1>
            <h1 className="text-5xl font-bold name text-teal-600 dark:text-coral-300">Yash Medhane</h1>
            <h3 className="text-lg text-gray-600 dark:text-gray-300 font-mono my-4">Web Developer | AI Enthusiast</h3>
          </div>
          <p className="text-base mb-8">
            I am a passionate Web Developer skilled in the MERN stack and proficient in Data Structures and Algorithms using C++. I am dedicated to building efficient and scalable web applications.
          </p>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start mb-8">
            {skill.map(item => (
              <div key={item.id} className="skill-block">
                <img src={item.image} alt={item.name} className="skill-image lg:w-10 w-16" />
              </div>
            ))}
          </div>
          <button
            className="font-mono py-3 px-6 text-lg bg-teal-700 text-white dark:bg-coral-400 dark:text-white rounded-lg hover:bg-teal-400 dark:hover:bg-coral-300 transition duration-300"
            onClick={openResume}
          >
            My Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
