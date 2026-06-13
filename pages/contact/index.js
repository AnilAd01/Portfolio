import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-slate-950 text-slate-100 relative overflow-hidden flex items-center'>
      {/* Background minimalist grid and radial atmospheric glow */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
      <div className='absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0'></div>

      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10 px-4'>
        {/* text & Form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='h2 xl:mt-8'
          >
            Let's <span className='h2 xl:mt-8'>connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            className='flex-1 flex flex-col gap-y-5 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex flex-col md:flex-row gap-5 w-full'>
              <input 
                type='text' 
                placeholder='name' 
                className='input w-full bg-slate-900/40 border border-slate-800/80 rounded-xl px-6 py-4 outline-none text-slate-200 placeholder:text-slate-500 placeholder:capitalize focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm'
              />
              <input 
                type='text' 
                placeholder='email' 
                className='input w-full bg-slate-900/40 border border-slate-800/80 rounded-xl px-6 py-4 outline-none text-slate-200 placeholder:text-slate-500 placeholder:capitalize focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm'
              />
            </div>
            
            <input 
              type='text' 
              placeholder='subject' 
              className='input w-full bg-slate-900/40 border border-slate-800/80 rounded-xl px-6 py-4 outline-none text-slate-200 placeholder:text-slate-500 placeholder:capitalize focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm'
            />
            
            <textarea 
              placeholder='message' 
              className='textarea w-full min-h-[180px] bg-slate-900/40 border border-slate-800/80 rounded-xl px-6 py-4 outline-none text-slate-200 placeholder:text-slate-500 placeholder:capitalize focus:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm resize-none'
            ></textarea> 

            {/* button */}
            <button className='btn rounded-full border border-slate-800 bg-slate-900/60 text-slate-200 font-medium max-w-[170px] h-[52px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-indigo-400 hover:text-white group relative self-center xl:self-start shadow-lg shadow-indigo-950/20'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 flex items-center gap-x-2'>
                Let's Talk
              </span>
              <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-indigo-400' />
            </button>
          </motion.form>

        </div>
      </div>
    </div>
  );
};

export default Contact;