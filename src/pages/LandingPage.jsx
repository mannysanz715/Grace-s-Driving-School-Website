import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Offerings from "../components/Offerings/Offerings";
import Photos from "../components/Photos/Photos";
// import NavBar from "../components/NavBar/NavBar";
import Pricing from "../components/Pricing/Pricing";
// import SocialMedias from "../components/SocialMedias/SocialMedias";
// import ContactUs from "../components/ContactUs/ContactUs";
// import { useState } from "react";
// import CardsBanner from "../components/CardsBanner/CardsBanner";

function LandingPage(){
  // const [modalState, setModalState] = useState(false);

  // function changeModalState(){
  //   setModalState(!modalState)
  // }

    // function closeModal(){
    //   setModalState(false)
    // }
  return(
    <div className="h-full scroll-smooth" >
      {/* <NavBar changeModalState={changeModalState} modalState={modalState}/> */}
      <div>
        <Header />
        {/* <CardsBanner /> */}
        <Offerings />
        <Pricing />
        <Photos />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage;
