import React from 'react'

function Intro() {
  return (
    <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
      <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Mohammed Azizur Rohman</h1>
      <p className='text-base md:text-xl mb-3 font-medium'>Software Engineer & Web Developer</p>
      <p className='text-sm max-w-xl mb-6 font-bold'>
        Hi! My name is Mohammed and I have a passion for coding! This is my project portfolio containing some of my favourite projects I have worked on to date. 
        <br />
        Building these projects has taught me many valuable skills such as problem solving, research and planning, CI/CD etc. You can also view more of my projects in my Github profile:{' '}
        <a 
          href='https://github.com/cachemoneey' 
          target='_blank'
          className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
          rel='noreferrer noopener'
        >
          cachemoneey
        </a>
        </p>
    </div>
  )
}

export default Intro