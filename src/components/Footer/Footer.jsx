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
            <a target="_blank" href="https://www.google.com/maps/place/8222+Melrose+Ave,+Los+Angeles,+CA+90046/@34.083547,-118.3714981,782m/data=!3m2!1e3!4b1!4m6!3m5!1s0x80c2bec9ef89aa2b:0x9b8bcbfefc6a404b!8m2!3d34.0835426!4d-118.3689232!16s%2Fg%2F11bw3z53w7?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" className="text-white font-bold" rel="noreferrer">8222 Melrose Ave, Suite 306 <br></br>Los Angeles, CA 90046</a>
          </div>
          <div className="flex justify-center gap-2 items-center">
          <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/000000/apple-phone.png" alt="apple-phone"/>
            <p className="text-white font-bold"> <a href="tel:+12138411290">(213) 841 - 1290,</a><br></br></p>
          </div>
        </div>
        <div className="flex-2">
          <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJK6qJ78m-woARS0Bq_P7Li5s&key=AIzaSyDVvUe4Q3439SnCDQetcU6ybWloToBlo3s" width="350" height="350"  loading="lazy"></iframe>

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
