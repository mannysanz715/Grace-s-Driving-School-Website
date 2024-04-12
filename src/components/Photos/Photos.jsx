export default function Photos(){
  return(
    <div className="flex justify-center items-center  bg-yellow-300 w-screen p-8 max-sm:p-5">
      <div id="default-carousel" className="relative w-4/12 max-sm:w-5/6" data-carousel="slide">

          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

            <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="/assets/onSite.jpg"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>

              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/assets/image2.png"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/assets/image3.png"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                  <img src="/assets/image1.jpg"  className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
              </div>
            //!Adding as a test
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>

          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">

                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
  </div>
  )
}


