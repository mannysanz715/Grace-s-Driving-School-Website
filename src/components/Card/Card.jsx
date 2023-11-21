/* eslint-disable react/prop-types */
function Card({image, subText}){
  return(
    <div className="w-80 max-sm:w-60 max-sm:h-52 h-fit shadow-xl transition hover:opacity-90">
      <img src={image} className="w-full h-60 max-sm:h-44 max-sm:rounded-t" alt="text-header"/>
      <h1 className="bg-slate-300 text-lg p-2 max-sm:rounded-b text-center w-full font-bold">
        {subText}
      </h1>
    </div>
  )
}

export default Card;
