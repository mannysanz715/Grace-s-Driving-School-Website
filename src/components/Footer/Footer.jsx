/* eslint-disable react/no-unescaped-entities */
function Footer(){
  return(
    <>
    <div className="bg-sky-400 flex w-screen items-center justify-center flex-col pt-10 pb-20 ">
      <img  src="/assets/logo.png" className="w-2/12  max-sm:w-6/12"></img>
      <div className="flex w-full justify-evenly pt-10 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
        <div className="flex flex-col gap-5 items-center justify-center flex-1">
          <h1 className="text-white text-2xl font-bold">Find Us At:</h1>
          <div className="flex justify-center gap-2 items-center">
            <img width="30" height="30" src="https://img.icons8.com/color/48/place-marker--v1.png" alt="place-marker--v1"/>
            <a target="_blank" href="https://maps.app.goo.gl/8D9wjUYUA4o5yhqx5" className="text-white font-bold" rel="noreferrer">3615 Beverly Blvd Suite A, <br></br>Los Angeles, CA 90004</a>
          </div>
          <div className="flex justify-center gap-2 items-center">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png" alt="apple-phone"/>
            <p className="text-white font-bold"> <a href="tel:+12138411290">(213) 841 - 1290,</a><br></br><a href="tel:+12137601883">(213) 760 - 1883</a></p>
          </div>
        </div>
        <div className="flex-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211504.41174669497!2d-118.59194430546877!3d34.075757499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7387eb7f395%3A0x409657caf45fa230!2sGraces%20Driving%20School!5e0!3m2!1sen!2sus!4v1703819819561!5m2!1sen!2sus" width="350" height="350"  loading="lazy"></iframe>

        </div>

        <div className="flex flex-col gap-5 items-center justify-center flex-1">
          <h1 className="text-white text-2xl font-bold">Links:</h1>
          <div className="flex justify-center gap-2 items-center">
          <img width="30" height="30" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
            <a className="text-white font-bold" target="_blank" href="https://www.instagram.com/gracesdrivingschool/" rel="noreferrer">@gracesdrivingschool</a>
          </div>
          <div className="flex justify-center gap-2 items-center">
          <img width="30" height="30" src="https://img.icons8.com/ios/50/book--v1.png" alt="book--v1"/>
            <a  target="_blank" className="text-white font-bold" href="https://www.gracesdrivingschooled.com/index.asp?discountcode=2023" rel="noreferrer">Driver's Ed</a>
          </div>
        </div>
      </div>

    </div>
      <div className="flex w-screen px-10 justify-between text-white bg-sky-500 py-3 max-sm:text-xs max-sm:px-5">
        <p>Grace's Driving School</p>
        <p>Copyright © 2024. All Rights Reserved</p>
      </div>
      </>
  )
}

export default Footer;
