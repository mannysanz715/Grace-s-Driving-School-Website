import './Policies.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const Policies = () => {
  useEffect(()=>{
    Aos.init({duration: 1500})
  },[])
  return (
    <div  className='policies-container'>
      <div className='flex flex-row bg-white items-center p-5 px-16 text-center max-sm:px-2'>
        <div className='flex-1'>
          <img data-aos="zoom-in"  src="/assets/logoBlack.png" className="w-40 h-32 max-sm:w-20 max-sm:h-16" alt="school logo" />
        </div>
        <div className='flex-2'>
          <h1 className='text-black text-3xl max-sm:text-xl font-bold text-center flex-2'>Policies List</h1>
        </div>
        <div className='flex-1 text-end'>
          <Link to='/'className='text-2xl max-sm:text-lg font-bold bg-[#f5f5f5] p-5 flex-1 rounded-full hover:bg-slate-200 text-center'>Home </Link>
        </div>
      </div>
      <ul className="policies-list">
        <li data-aos='fade-up' className='policy-item'>All lessons are to be paid upfront.</li>
        <li data-aos='fade-up' className='policy-item'>All lessons must be completed within 6 months of the purchase date.</li>
        <li data-aos='fade-up' className='policy-item'>Lessons that are not paid at the start of the class will be canceled and are subject to a $30 fee for rescheduling the next class.</li>
        <li data-aos='fade-up' className='policy-item'>Cancellations within 24 hours of the lesson will be subject to a $30 fee.</li>
        <li data-aos='fade-up' className='policy-item'>All document duplicates are subject to a $25.00 fee.</li>
        <li data-aos='fade-up' className='policy-item'>All driving lessons are 2 hours.</li>
      </ul>
    </div>
)
}

export default Policies