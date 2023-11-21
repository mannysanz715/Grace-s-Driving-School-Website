import Card from "../Card/Card";

function CardsBanner(){
  return(
    <div className="bg-sky-500 max-sm:hidden">
    <div className="h-[24rem] max-sm:h-fit max-sm:pb-10 bg-sky-500 flex justify-center gap-10 pt-20 items-center max-sm:flex-col">
      <Card image="/assets/grace.png" subText="Patient Instructors"/>
      <Card image="/assets/car.png" subText="Comfortable Vehicles" />
      <Card image="/assets/home.png" subText="Service That Comes to You"/>
    </div>
    <div>
    <svg className="bg-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0ea5e9"  d="M0,288L60,256C120,224,240,160,360,144C480,128,600,160,720,165.3C840,171,960,149,1080,122.7C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

    </div>
    </div>
  )
}

export default CardsBanner;
