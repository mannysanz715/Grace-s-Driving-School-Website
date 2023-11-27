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
      <div className='flex flex-row bg-[#f5f5f5] items-center pt-10 justify-evenly text-center'>
        <h1 className='text-black text-3xl font-bold text-center'>Policies List</h1>
      <img data-aos="zoom-in"  src="/assets/logoBlack.png" className="w-40 h-32 max-sm:w-9/12" alt="school logo" />
        <Link to='/'className='text-2xl font-bold bg-white p-5 rounded-full hover:bg-slate-200 text-center'>Home </Link>
      </div>
      <ul className="policies-list">
        <li data-aos='fade-up' className='policy-item'>All Packages are paid upfront.</li>
        <li data-aos='fade-up' className='policy-item'>Package classes must be scheduled within 6 months of the purchase date.</li>
        <li data-aos='fade-up' className='policy-item'>Single classes are to be paid prior to the start of the class.</li>
        <li data-aos='fade-up' className='policy-item'>Single classes that are not paid at the start of the class will be canceled and are subject to a $30 fee for rescheduling the next class.</li>
        <li data-aos='fade-up' className='policy-item'>Cancellations Within 24 Hours Of The Class Will Be Subject To A $30 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Document Duplicates Are Subject To A $25.00 Fee</li>
        <li data-aos='fade-up' className='policy-item'>All Driving Appointments Are 2 Hours</li>
      </ul>
    </div>
)
}

export default Policies