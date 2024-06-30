import React from 'react';
import projectData from './projectApi';

const Projects = () => {
    return (
        <div id='projects' className="bg-gray-800 dark:bg-gray-900 text-gray-200 dark:text-gray-100 min-h-screen p-6 md:p-12">
            <h2 className="text-4xl font-extrabold text-teal-300 dark:text-coral-300 mb-12 text-center">My Projects</h2>
            <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {projectData.map(project => (
                    <div key={project.id} className="project-card bg-gray-700 dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src={project.image} alt={project.name} className="project-image mx-16 h-40 object-cover rounded-md mb-4" />
                        <div className="project-details">
                            <h3 className="text-xl font-semibold mb-2 text-teal-400 dark:text-coral-400">{project.name}</h3>
                            <p className="text-base mb-4">{project.desc}</p>
                            <a href={project.link} className="text-teal-500 dark:text-coral-300 hover:underline" target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
