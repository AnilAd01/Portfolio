import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { fadeIn } from '../../variants';

export const aboutData = [
  {
    title: 'skills',
    info: [
      { title: 'Web Development', icons: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />, <FaReact key="react" />, <SiNextdotjs key="nextjs" />, <SiFramer key="framer" />, <FaWordpress key="wp" />] },
      { title: 'UI/UX Design', icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="ps" />] },
    ],
  },
  
  {
    title: 'awards',
    info: [
      { title: 'Webby Awards - Honoree', stage: '2011 - 2012' },
      { title: 'Adobe Design Achievement Awards - Finalist', stage: '2009 - 2010' },
    ],
  },
  {
    title: 'experience',
    info: [
      { title: 'UX/UI Designer - XYZ Company', stage: '2012 - 2023' },
      { title: 'Web Developer - ABC Agency', stage: '2010 - 2012' },
      { title: 'Intern - DEF Corporation', stage: '2008 - 2010' },
    ],
  },
  {
    title: 'credentials',
    info: [
      { title: 'Web Development - ABC University, LA, CA', stage: '2011' },
      { title: 'Computer Science Diploma - AV Technical Institute', stage: '2009' },
      { title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA', stage: '2006' },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-slate-950 text-slate-100 py-32 text-center xl:text-left relative overflow-hidden'>
      {/* Background grid & minimalist glows */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
      <div className='absolute top-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none'></div>
      <div className='absolute bottom-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none'></div>

      <Circles />

      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12 relative z-10'>
        {/* text */}
        <div className='flex-1 flex flex-col justify-center pt-12 xl:pt-0'>
          {/* <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'
                      className='h2'>
                      Captivating <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>stories</span> birth magnificent designs.
                    </motion.h2> */}
          
          <motion.p 
            variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
            className='max-w-[520px] mx-auto xl:mx-0 mb-8 xl:mb-16 px-4 xl:px-0 text-slate-400 text-sm md:text-base font-light leading-relaxed'
          >
            I am a passionate Digital Marketing and eCommerce professional with experience in online sales, marketplace management, website operations, and digital campaigns. I enjoy helping businesses grow 
            through innovative marketing strategies, data-driven insights, and exceptional customer experiences.
          </motion.p>

          {/* counters */}
          <motion.div 
            variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
          >
            <div className='flex flex-1 gap-x-4 xl:gap-x-8'>
              <div className='relative flex-1 after:w-[1px] after:h-8 after:bg-slate-800 after:absolute after:top-2 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-indigo-400 mb-1'>
                  <CountUp start={0} end={10} duration={5} />+
                </div>
                <div className='text-[10px] uppercase tracking-[1.5px] text-slate-400 leading-tight max-w-[90px]'>Years of Experience</div>
              </div>
              
              <div className='relative flex-1 after:w-[1px] after:h-8 after:bg-slate-800 after:absolute after:top-2 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-indigo-400 mb-1'>
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className='text-[10px] uppercase tracking-[1.5px] text-slate-400 leading-tight max-w-[90px]'>Satisfied Clients</div>
              </div>
              
              <div className='relative flex-1 after:w-[1px] after:h-8 after:bg-slate-800 after:absolute after:top-2 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-indigo-400 mb-1'>
                  <CountUp start={0} end={650} duration={5} />+
                </div>
                <div className='text-[10px] uppercase tracking-[1.5px] text-slate-400 leading-tight max-w-[90px]'>Finished Projects</div>
              </div>
              
              <div className='relative flex-1'>
                <div className='text-2xl xl:text-4xl font-extrabold text-indigo-400 mb-1'>
                  <CountUp start={0} end={8} duration={5} />+
                </div>
                <div className='text-[10px] uppercase tracking-[1.5px] text-slate-400 leading-tight max-w-[90px]'>Winning Awards</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* info */}
        <motion.div 
          variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
          className='flex flex-col w-full xl:max-w-[48%] h-[380px] mt-4 xl:mt-0 px-4 xl:px-0'
        >
          {/* Tabs header */}
          <div className='flex gap-x-6 xl:gap-x-10 mx-auto xl:mx-0 mb-8 border-b border-slate-900 w-full justify-center xl:justify-start pb-2'>
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                onClick={() => setIndex(itemIndex)}
                className={`${index === itemIndex ? 'text-indigo-400 font-medium after:w-full' : 'text-slate-400 hover:text-slate-200 after:w-0'} 
                cursor-pointer capitalize text-base md:text-lg relative pb-2 transition-all duration-300
                after:h-[2px] after:bg-gradient-to-r after:from-indigo-400 after:to-purple-500
                after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300`}
              >
                {item.title}
              </div>
            ))}
          </div>

          {/* Tab content area */}
          <div className='flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className='flex flex-col md:flex-row max-w-max gap-x-4 items-center text-slate-400 bg-slate-900/30 border border-slate-900/50 rounded-xl px-5 py-3 w-full md:w-auto transition-all duration-300 hover:border-slate-800 hover:bg-slate-900/60'
              >
                <div className='font-normal text-slate-200 text-sm md:text-base mb-1 md:mb-0'>{item.title}</div>
                {item.stage && (
                  <>
                    <div className='hidden md:flex text-slate-700'>•</div>
                    <div className='text-xs font-mono text-indigo-400/80 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-900/30'>{item.stage}</div>
                  </>
                )}
                {item.icons && (
                  <div className='flex gap-x-4 mt-2 md:mt-0 ml-0 md:ml-2'>
                    {item.icons.map((icon, iconIndex) => (
                      <div 
                        key={iconIndex} 
                        className='text-xl md:text-2xl text-slate-400 hover:text-indigo-400 hover:scale-110 transition-all duration-200'
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;