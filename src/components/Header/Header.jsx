import Buttons from '../Buttons/Buttons';
import './header.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Header(){
  useEffect(()=>{
    Aos.init({duration: 900})
  },[])

  return(
    <div  className="flex flex-col header max-sm:justify-evenly max-sm:gap- justify-between py-16 items-center w-screen h-screen">
      <div className='flex flex-col items-center w-11/12'>
      <img data-aos="zoom-in"  src="/assets/logo.png" className="w-3/12 max-sm:w-8/12" alt="school logo" />
        <p className='text-white text-4xl font-extrabold text-center '>Your #1 Choice For Driving Lessons</p>
        <p className='text-white text-4xl font-bold text-center '>Learn To Drive With Patient Instructors</p>

      </div>
      <div className='flex gap-10 max-sm:flex-col'>
        <Buttons text="Check Our Rates" color={"blue"} href="#pricing"/>
        <Buttons text="Call to Schedule" color={"yellow"} href="tel:2138411290"/>
      </div>
    </div>
  )
}

export default Header;
