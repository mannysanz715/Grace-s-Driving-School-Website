/* eslint-disable react/prop-types */
import SideMenu from "../SideMenu/SideBar"

function NavBar({changeModalState, modalState}){

  return(
    <>
        <div className="flex w-14 fixed max-sm:bottom-3 max-sm:right-3 sm:right-10 sm:top-10 bg-sky-800 p-4 opacity-75 rounded-2xl hover:opacity-100" onClick={changeModalState}>
          <svg  className="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </div>
      {modalState && <SideMenu />}
    </>
  )
}

export default NavBar;
