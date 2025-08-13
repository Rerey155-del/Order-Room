import React from 'react'
import Hero from '@/components/hero'
import Main from '@/components/main'

const Home = () => {
  return (
    <div>
      <Hero />
      <div className='mt-16'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold uppercase text-black'>Room and Rates</h1>
          <p className='py-3 text-black'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi commodi eum.
          </p>
        </div>
        <Main />
      </div>
    </div>
  )
}

export default Home
