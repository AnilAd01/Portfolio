import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';  
import React, { useCallback } from 'react';

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles 
      className='w-full h-full absolute translate-z-0'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: 'push' },
            onHover: { enable: true, mode: 'grab' }, // Links to your mouse cursor
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            grab: { distance: 140, links: { opacity: 0.5 } },
          },
        },
        particles: {
          color: { value: '#38bdf8' }, // Electric Cyan/Blue
          links: {
            color: '#38bdf8',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: { default: 'out' },
            random: true,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;