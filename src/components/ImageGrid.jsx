import React, { useRef } from "react";

const ImageGrid = ({ darkMode }) => {
  const images = [
    { src: "https://media.licdn.com/dms/image/v2/D5622AQHDYmqBve-0Kg/feedshare-shrink_800/B56ZbKUI3PH0Ag-/0/1747151000858?e=1756339200&v=beta&t=7SIWbIeSyF_mJXUyNaFmC-D7zGEHvn1KiHH3nqUQoaw", desc: "ANIMESH RAJ" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQGW13axymo2Gg/feedshare-shrink_800/B56Za5J3RgHUAg-/0/1746863096110?e=1756339200&v=beta&t=mz6tXlld8ksHqNckUN3lcW0VhEf4CcmBhxyeNE7j-Tc", desc: "MANIKANT SINGH" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQFPRHCW8Fhssg/feedshare-shrink_800/B56ZaLAnE2HUAk-/0/1746088916228?e=1756339200&v=beta&t=T-5kZh-bhn5DP8fm6nGtSi69xMFbw2sCV3O8SHec6vY", desc: "RAVIRANJAN KUMAR" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQHiDXBk1pBTnQ/feedshare-shrink_800/B56ZaCdMMqGUAk-/0/1745945415367?e=1756339200&v=beta&t=R5VmgQQZJ2ckp2fFaRj7zekF_c841TZG7h2zyR7VxtQ", desc: "SACHIN SINGH" },
    { src: "https://media.licdn.com/dms/image/v2/D5622AQFyQ0rtPNB-_g/feedshare-shrink_800/B56Zbr2fNQGsAk-/0/1747713652512?e=1756339200&v=beta&t=QAAW-78SRONWNvYmSxRhi_48ti20kPoHmf9AyG_bR_0", desc: "SAHIL KHAN" },
  ];

  const scrollRef = useRef(null);

  // Only allow button scroll
  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };
  // Hide scrollbar utility
  const hideScrollbar = {
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE 10+
  };

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className={`font-bold text-4xl md:text-5xl text-center mb-8 tracking-wide ${darkMode ? 'text-white' : 'text-black'}`} style={{fontFamily: 'Bebas Neue, sans-serif'}}>Success Stories</h2>
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-200 text-blue-700 rounded-full shadow-lg transition-all w-14 h-14 flex items-center justify-center text-3xl border-2 border-blue-200"
          style={{ left: '-4rem' }}
          onClick={() => scrollByAmount(-1120)}
          aria-label="Scroll Left"
        >
          &#8592;
        </button>
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-6 pb-4 select-none snap-x snap-mandatory"
          style={{ ...hideScrollbar, WebkitOverflowScrolling: 'touch', WebkitScrollbar: { display: 'none' } }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 min-w-[260px] w-64 flex-shrink-0 snap-center"
            >
              <div className="w-full aspect-square overflow-hidden flex items-center justify-center bg-gray-100">
                <img
                  src={img.src}
                  alt={`Gallery ${idx + 1}`}
                  className="object-cover w-full h-full hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="p-4 w-full text-center border-t border-gray-100 backdrop-blur-md bg-blue-200/30 dark:bg-blue-400/20" style={{boxShadow: '0 4px 30px rgba(0, 118, 255, 0.1)', borderRadius: '0 0 0.75rem 0.75rem', border: '1px solid rgba(30, 64, 175, 0.18)'}}>
                <p className={`${darkMode ? 'text-black' : 'text-blue-900'} text-base font-medium drop-shadow`}>{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-200 text-blue-700 rounded-full shadow-lg transition-all w-14 h-14 flex items-center justify-center text-3xl border-2 border-blue-200"
          style={{ right: '-4rem' }}
          onClick={() => scrollByAmount(1120)}
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ImageGrid; 