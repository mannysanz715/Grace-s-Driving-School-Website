import OfferCards from "./OfferCards";

export default function Offerings(){
  return(
    <div className="bg-sky-400 w-screen h-fit">
    <div className="flex flex-col pt-10 bg-yellow-300 max-sm:pb-32 gap-20 max-sm:gap-5 max-sm:pt-14">
      <h1 className="text-sky-400 text-center text-5xl max-sm:text-5xl font-extrabold">Services</h1>
      <div className="h-max flex flex-col gap-20 justify-evenly items-center bg-yellow-300 max-sm:flex-col max-sm:pt-16 max-sm:h-max">
        <OfferCards title="Behind The Wheel Training" image='/assets/grace.png' buttonText="Learn More" buttonLink="#pricing" buttonType=""/>
        <OfferCards title="Driver's Ed" buttonText="Log In" buttonText2="Sign Up" image="/assets/kid.png" buttonLink="https://gracesdrivingschooled.com/signup/" buttonLink2="https://gracesdrivingschooled.com/login/" buttonType="link"/>
        <OfferCards title="Traffic School" buttonText="Log In" buttonText2="Sign Up" image="/assets/trafficSchool.png" buttonLink="https://traffic.gracesdrivingschooled.com/signup/index.html?secure=1&" buttonLink2="https://traffic.gracesdrivingschooled.com/course/login.html?secure=1" buttonType="link"/>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fde047" d="M0,96L80,133.3C160,171,320,245,480,250.7C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    </div>
  )
}


