import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-slate-950 text-slate-100 h-full relative overflow-hidden'>
      {/* Subtle modern background grid & radial glow */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]'></div>
      <div className='absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]'></div>

      {/* Content wrapper */}
      <div className='w-full h-full relative z-10 flex items-center'>
        <div className='container mx-auto px-6 xl:px-0 flex flex-col xl:flex-row h-full items-center justify-between pt-24 xl:pt-0'>
          
          {/* Left Text Column */}
          <div className='text-center xl:text-left flex flex-col justify-center max-w-2xl z-20'>
            {/* Tag/Badge */}
            <motion.div 
              variants={fadeIn('down', 0.1)} initial='hidden' animate='show' exit='hidden'
              className='inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs text-indigo-400 w-fit mx-auto xl:mx-0 mb-6'
            >
             
            </motion.div>

           <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' 
                   exit='hidden'
                 className='h1' >
                  Driving Growth <br/> Through <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>Digital Innovation</span>
                   </motion.h1>
                   {/*subtitle */}
                   <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' 
                   exit='hidden'
                   className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Experienced in eCommerce, digital marketing, and online sales, I help businesses grow through strategic campaigns, marketplace management, customer engagement, and data-driven decision-making.
                   </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
              className='flex justify-center xl:justify-start'
            >
              <ProjectsBtn />
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <div className='w-full xl:w-[50%] h-[40vh] xl:h-full relative flex items-end justify-center xl:justify-end mt-12 xl:mt-0'>
            {/* Particles restricted to right visual block */}
            <div className='absolute inset-0 z-0 opacity-40'>
              <ParticlesContainer/>
            </div>
            
            {/* Avatar Img Wrapper */}
            <motion.div
              variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden'
              transition={{ duration: 1, ease: 'easeInOut' }}
              className='w-[280px] md:w-[450px] xl:w-[550px] max-h-[85%] relative z-10 filter drop-shadow-[0_0_30px_rgba(99,102,241,0.15)]'
            >
              <Avatar/>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;