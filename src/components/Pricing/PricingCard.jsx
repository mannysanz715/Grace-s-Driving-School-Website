/* eslint-disable react/prop-types */


function PricingCard({header, hours, text1, text2, text3}){
  return(
    <div className="bg-sky-500 rounded py-8 px-2  shadow text-center gap-3 flex flex-col justify-center items-center w-[21rem]">
      <h1 className="text-white text-3xl font-bold">{header}</h1>
      <h1 className="text-white text-3xl font-bold"> {hours}</h1>
      <div className="flex flex-col gap-3 w-62 bg-white p-4 rounded">
        <h1 className="text-black text-2xl font-bold">{text1}</h1>
        <h1 className="text-black text-2xl font-bold">{text2}</h1>
        <h1 className="text-black text-2xl font-bold">{text3}</h1>
      </div>

    </div>
  )
}

export default PricingCard;
