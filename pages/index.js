//nextimage
import Image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import { motion } from 'framer-motion';

//variants
import {fadeIn} from '../variants';


const Home = () => {
  return(
  <div className='bg-slate-950 text-slate-100 h-full relative overflow-hidden'>
      {/* Subtle modern background grid & radial glow */}
<div className='absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:linear-gradient(to_left,#000_30%,transparent_70%)]'></div>
<div className='absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]'></div>
<div className='absolute bottom-[13%] right-[13%] h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[150px]'></div>
    {/* text */}
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto'>
      {/* title */}
      <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' 
        exit='hidden'
      className='h1' >
        Transforming Ideas <br/> Into <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>Digital Reality</span>
        </motion.h1>
        {/*subtitle */}
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' 
        exit='hidden'
        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>I help businesses grow through strategic campaigns, marketplace management, customer engagement, and data-driven decision-making.
        </motion.p>
        {/* btn */}
        <div className='flex justify-center xl:hidden relative '>
          <ProjectsBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' 
        exit='hidden'
        className='hidden xl:flex'>
          <ProjectsBtn />
          </motion.div>
    </div>

    </div>
    {/*Image */}
    <div className='w-[1200px] h-full absolute right-0 bottom-0'>
     {/*bg img*/}
     {/*<div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
     xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>/*}
     {/*particles*/}
     <ParticlesContainer/>
    
     {/*avatar Img*/}
     <motion.div
     variants={fadeIn('up', 0.5)} initial='hidden' animate='show' 
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut' }
 }
      className='w-full h-full max-w-[600px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]'>
   <Avatar/>
     </motion.div>
      </div>
  </div>
  );

};

export default Home;
