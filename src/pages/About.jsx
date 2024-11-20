import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
import linkedinIcon from '../assets/icons/linkedin.svg'; // Import LinkedIn icon
import behanceIcon from '../assets/icons/behance.svg'; // Import GitHub icon

const About = () => {
  return (
    <section className='max-container'>
      <div className='flex justify-between items-center'>
        <h1 className='head-text'>
          Hello, I'm{" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            Palak
          </span>
        </h1>

        <div className='flex gap-8'>
          <a
            href='https://www.linkedin.com/in/palak-dimri-b315b6211/'
            target='_blank'
            rel='noopener noreferrer'
            className='transform hover:scale-110 transition-transform duration-300'
          >
            <img
              src={linkedinIcon}
              alt='LinkedIn'
              className='w-8 h-8 cursor-pointer hover:opacity-1'
            />
          </a>
          <a
            href='https://www.behance.net/palakdimri7ae4'
            target='_blank'
            rel='noopener noreferrer'
            className='transform hover:scale-110 transition-transform duration-300'
          >
            <img
              src={behanceIcon}
              alt='Behance'
              className='w-8 h-8 cursor-pointer hover:opacity-1'
            />
          </a>
        </div>
      </div>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          I’m a Communication Design student at NIFT Bhubaneswar, specializing in UI/UX and website design. I create visually engaging, user-centered
          digital experiences that blend creativity with functionality.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with Tonic Worldwide as a UI/UX Intern and Futurios as a UI/UX and Graphics Intern. In these roles, I collaborated on designing user-centered interfaces and creative graphics, blending functionality with aesthetics to deliver seamless and engaging digital experiences.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium text-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;
