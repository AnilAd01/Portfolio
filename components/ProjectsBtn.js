import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='flex flex-row items-center gap-x-20 mx-auto xl:mx-0'>
      {/* circular projects button */}
      <Link href={'/work'} className='relative w-[185px] h-[185px] flex justify-center items-center
      bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image
          src={'/rounded-text.png'}
          width={141}
          height={148}
          alt=''
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'
        />
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
      </Link>

      {/* download CV button */}
      <a 
        href='/cv.pdf' 
        download 
        className='btn rounded-full border border-white/50 px-8 py-4 transition-all duration-300 
        flex items-center justify-center gap-x-2 hover:border-accent hover:text-accent group'>
        Download CV
        <HiArrowRight className='group-hover:translate-x-1 transition-all duration-300'/>
      </a>
    </div>
  );
};

export default ProjectsBtn;