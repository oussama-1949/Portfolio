import React from 'react';
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    image: 'bringsmile.PNG',
    title: 'BringSmile Dental Appointment System',
    description: ' Patient appointment booking system for dentists',
    githubUrl: 'https://github.com/user/project1'
  },
  {
    image: 'airbnb.PNG',
    title: 'Airbnb Apartment Booking(similar)',
    description: ' Apartment booking platform similar to Airbnb, built with MERN stack',
    githubUrl: 'https://github.com/user/project2'
  },
  {
    image: 'ecommerce.PNG',
    title: 'Ecommerce App  Design Prototype',
    description: 'Prototype designed using Figma for an app, focusing on UI/UX design.',
    githubUrl: 'https://github.com/user/project3'
  },
  // Add more projects as needed
];

export default function MyProjects() {
  return (
    <div className="mt-8">
      <div className="">
        <div className="font-customRegular text-first text-4xl">My Projects</div>
        <div className="mt-8 font-MyThin text-first text-base capitalize">
          Some things I've built
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-firstBg rounded-lg shadow-lg p-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="font-bold text-lg text-first">{project.title}</h3>
                <p className="mt-2 text-first">{project.description}</p>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 px-4 py-2 bg-first text-white rounded flex items-center justify-center"
                >
                  <FaGithub className="mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
