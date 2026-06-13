//components
import TestimonialSlider from "../../components/TestimonialSlider";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='h-full bg-slate-950 text-slate-100 py-32 text-center relative overflow-hidden flex items-center'>
      {/* Background minimalist grid and central atmospheric glow */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
      <div className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none z-0'></div>

      <div className='container mx-auto h-full flex flex-col justify-center relative z-10 px-4 xl:px-0'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='h2 xl:mt-8'
        >
          What clients <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400'>say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'
          className='w-full max-w-5xl mx-auto'
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;