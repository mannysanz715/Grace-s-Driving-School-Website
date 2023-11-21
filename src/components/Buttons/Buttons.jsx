/* eslint-disable react/prop-types */

function Buttons({text, color, href}){
  let styling
  if(color == 'yellow'){
    styling = 'transition hover:bg-yellow-200 w-52 p-2 ml-4 rounded-lg flex justify-center items-center h-16 bg-yellow-400'
  }else {
    styling = 'transition hover:bg-sky-200 w-52 p-2 ml-4 rounded-lg flex justify-center items-center h-16 bg-sky-400'
  }
  return(
    <a className={styling} href={href}>
      <h1 className="text-white text-center text-lg font-bold">{text}</h1>
    </a>
  )
}

export default Buttons;
