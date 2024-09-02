import React from 'react'

function Hero() {
  return (
    <section className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
          AI Course Generator
          <strong className="font-extrabold text-black sm:block"> Custom Learning Paths, Powered by AI </strong>
        </h1>
  
        <p className="mt-4 sm:text-xl/relaxed">
          Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your unique goals and pace
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            href="#"
          >
            Get Started
          </a>
  
       
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero