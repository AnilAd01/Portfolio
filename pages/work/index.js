//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import WorkSlider from '../../components/WorkSlider'; 

const Work = () => {
  return ( 
    <div className='h-full bg-slate-950 text-slate-100 py-36 flex items-center relative overflow-hidden'>
      {/* Background minimalist grid and radial glows */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
      <div className='absolute bottom-[10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[130px] pointer-events-none'></div>
      
      <Circles />
      
      <div className='container mx-auto relative z-10'>
        <div className='flex flex-col xl:flex-row gap-x-12 items-center xl:items-start'>
          
          {/* text */}
          <div className='text-center flex xl:w-[35vw] flex-col xl:text-left mb-12 xl:mb-0 px-4 xl:px-0'>
            <motion.h2 
              variants={fadeIn('right', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='h2 xl:mt-8'
            > 
              My Work <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>.</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeIn('right', 0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto xl:mx-0 text-slate-400 text-sm md:text-base font-light leading-relaxed'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('left', 0.6)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div> 
          
        </div>
      </div>
      
      <Bulb />
    </div>
  );
};

export default Work;