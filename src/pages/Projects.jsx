import React from 'react';
import { projects } from "../constants";
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';
import linkedinIcon from '../assets/icons/linkedin.svg'; // Import LinkedIn icon
import behanceIcon from '../assets/icons/behance.svg'; // Import Behance icon

const Projects = () => {
  return (
    <section className='max-container'>
      <div className="flex justify-between items-center">
        <h1 className='head-text'>
          My{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Projects
          </span>
        </h1>

        {/* Social Links at the Extreme Right */}
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/palak-dimri-b315b6211/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-8 h-8 cursor-pointer hover:opacity-80 transform hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://www.behance.net/palakdimri7ae4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={behanceIcon}
              alt="Behance"
              className="w-8 h-8 cursor-pointer hover:opacity-80 transform hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
      </div>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I specialize in UX research, graphic design, landing pages, fashion styling,
          UI design, and art direction. I combine user-centric design with creativity to
          deliver engaging, visually compelling experiences that enhance both functionality
          and aesthetic appeal across various projects.
          <br />
          <br />
          Here are some of my projects
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='project-icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default Projects;
