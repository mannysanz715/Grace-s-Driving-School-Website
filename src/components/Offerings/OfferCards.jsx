/* eslint-disable react/prop-types */
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function OfferCards({title, buttonText, buttonText2, buttonLink2, image, buttonLink}){
  useEffect(()=>{
    Aos.init({duration: 900})
  },[])

  let type = '#'
  if(buttonLink[0] !== '#'){
     type = 'link'
  }


  return(
    <div data-aos='flip-left' className="bg-sky-400 w-3/6 h-[18rem] max-sm:flex-col-reverse gap-5 max-sm:h-fit max-sm:text-center max-sm:w-72 flex justify-evenly items-center p-5 rounded opacity-90">
     <div className="flex flex-col items-center justify-center gap-8 w-[18rem]">
        <h1 className="text-white font-bold text-4xl text-center max-sm:pb-2 max-sm:text-xl">{title}</h1>
        {type == 'link' ? <div className="flex gap-10">
          <a className="p-3 max-sm:w-20 max-sm:text-sm w-28 text-center rounded bg-sky-800 text-white hover:bg-sky-300 transition" href={buttonLink} target="_blank" rel="noreferrer" >
          {buttonText2} </a>
          <a className="p-3 w-28 max-sm:w-20 max-sm:text-sm text-center rounded bg-sky-800 text-white hover:bg-sky-300 transition" href={buttonLink2} target="_blank" rel="noreferrer" >
          {buttonText} </a>
        </div> 
        : <a className="p-3 rounded max-sm:w-22 max-sm:text-sm bg-sky-800 text-white hover:bg-sky-300 transition" href={buttonLink} rel="noreferrer" >
          {buttonText}
        </a>}
     </div>
      <img src={image} className="w-48 max-sm:w-56 rounded-xl max-sm:w-44" alt="image" />
    </div>
  )
}

export default OfferCards;
