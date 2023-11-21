import PricingCard from "./PricingCard";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Pricing(){
  useEffect(()=>{
    Aos.init({duration: 900})
  },[])


  return(
    <div id="pricing" className="flex max-sm:pt-10 justify-center items-center pb-20 flex-col gap-10 bg-sky-400">
      <h1 className="text-yellow-300 text-5xl font-extrabold">Pricing</h1>
      <h1 className="text-sm text-white underline font-bold max-sm:w-80 text-center">PACKAGES ARE TO BE PAID AT OR BEFORE THE START OF THE FIRST CLASS</h1>
      <div data-aos='zoom-in' className="flex gap-5 max-sm:flex-col">
        <PricingCard header="Single Classes | 2 Hours" hours="Price: $175" text1="Pick up and drop off within the Los Angeles area." text2="Private lesson with patient and experienced instructors." text3="Confidence with safety features such as dual controll systems for instructors."/>
        <PricingCard header="Silver Package | 6 Hours" hours="
Price: $450"  text1="DMV 6 Hour Certificate Compliant." text2="Inlcudes 3 lessons(6 hours)." text3="Patient instructors with years of experience, dual controlls on all vehicles, pick up and drop off within the Los Angeles Area." />
        <PricingCard header="Gold Package | 10 Hours" hours="
Price: $700"  text1="DMV 6 Hour Certificate Compliant." text2="Inlcudes 5 lessons(10 hours)." text3="Patient instructors with years of experience, dual controlls on all vehicles, pick up and drop off within the Los Angeles Area." />
        <PricingCard header="DMV Behind the Wheel Test" hours="
Price: $250"  text1="Pick up within the Los Angeles area 1 hour prior to DMV appointment time." text2="All registration and paper work taken care of with DMV." text3="Vehicle for the driving exam. Drop off in the Los Angeles Area." />
      </div>
    </div>
  )
}

export default Pricing;
