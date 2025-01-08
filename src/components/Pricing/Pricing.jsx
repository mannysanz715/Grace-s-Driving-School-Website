import './Pricing.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Buttons from '../Buttons/Buttons';

import { Link } from 'react-router-dom'

import { useEffect } from 'react'


export default function Pricing(){
  useEffect(()=>{
    Aos.init({duration: 900})
  },[])


  return(
    <div id="pricing" className="flex max-sm:pt-10 w-screen justify-center items-center pb-20 flex-col gap-10 bg-sky-400">
      <h1 className="text-yellow-300 text-5xl font-extrabold">Pricing</h1>
      <h1 className="text-sm text-white underline font-bold max-sm:w-80 text-center">PACKAGES ARE TO BE PAID AT OR BEFORE THE START OF THE FIRST LESSON</h1>

      <div data-aos='zoom-in' className="flex gap-5 max-sm:flex-col">
      <div data-aos='fade-up' className="reg-class-pricing flex flex-col justify-center items-center gap-3 text-center m-5 h-[30rem] w-96 max-sm:w-80 p-5 rounded bg-white mb-[50px]">
          <h3 className='text-center mb-5 text-2xl font-extrabold'>2 Hour Lessons</h3>
          <p className='text-center font-extrabold text-xl'> Price: $195</p>
          <h4 className='center-text'>Here is what is included in the lessons</h4>
          <p className='w-[250px]'>Pick up and drop off within the Los Angeles area.</p>
          <p className='w-[250px]'>Training during the entire lesson.</p>
          <p className='w-[250px]'>Private lesson with patient and experienced instructors.</p>
          <p className='w-[250px]'>Confidence with safety features such as dual controll systems for instructors.</p>
          <p className='w-[250px] font-bold text-lg'>Classes are to be paid in full on or before pick up time. </p>
        </div>
        <div data-aos='fade-up' className="drive-test-pricing flex flex-col justify-center items-center gap-5 text-center m-5 h-[30rem] w-96 max-sm:w-80 p-5 rounded bg-white mb-[50px]">
          <h3 className='text-center mb-5 text-2xl font-extrabold'>Lesson Packages</h3>
          <p className='text-center font-extrabold text-xl'> Silver Package : $520</p>
          <p className='w-[250px] center-text'>DMV 6 Hour Certificate Compliant.</p>
          <p className='w-[250px] center-text'>Inlcudes  3 lessons(6 hours).</p>
          <p className='text-center font-extrabold text-xl'> Gold Package : $800</p>
          <p className='w-[250px] center-text'>Inlcudes  5 lessons(10 hours).</p>
          <p className='w-[250px] center-text'>DMV 6 Hour Certificate Compliant.</p>
          <p className='w-[250px] font-bold text-lg'>Packages are to be paid in full on or before first lesson. </p>
        </div>
        <div data-aos='fade-up' className="drive-test-pricing flex flex-col justify-center items-center gap-5 text-center m-5 h-[30rem] w-96 max-sm:w-80 p-5 rounded bg-white mb-[50px] end">
          <h3 className='text-center mb-5 text-2xl font-extrabold'>Behind the Wheel Test</h3>
          <p className='text-center font-extrabold text-xl'>Price: $250 (Flat Rate)</p>
          <p className='w-[250px]'>Pick up within the Los Angeles area 1 hour prior to DMV appointment time.</p>
          <p className='w-[250px]'>All registration and paper work taken care of with DMV.</p>
          <p className='w-[250px]'>Vehicle for the driving exam.</p>
          <p className='w-[250px]'>And drop off in the Los Angeles area.</p>
          <p className='w-[250px] font-bold text-lg'>Test is to be paid in full on or before pick up time. </p>

        </div>
      </div>
      <h1 className="text-yellow-300 text-5xl font-extrabold">Policies</h1>
        <Link className='text-sm text-white underline font-bold max-sm:w-80 text-center' to='/terms&conditions' >BEFORE BOOKING GO OVER OUR POLICIES</Link>

        <Buttons text="Call / Text to Book" color={"yellow"} href="tel:2138411290"/>
    </div>
  )
}
