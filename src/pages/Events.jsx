import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Events() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    // 延迟1.5秒显示箭头
    const timer = setTimeout(() => {
      setShowArrow(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])
  const events = [
    {
      image: '/event1.png'
    },
    {
      image: '/event2.png'
    },
    {
      image: '/event3.png'
    }
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Events Section */}
      <section 
        className="relative min-h-screen w-full snap-start flex flex-col"
        style={{ backgroundColor: '#c3bdae' }}
      >
        {/* Header with Back Button and Title */}
        <div className="relative w-full flex items-center justify-center" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
          {/* Back Button */}
          <Link 
            to="/" 
            className="absolute left-8 md:left-12 z-20 flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-[#252627] transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            <span className="font-anton text-xl md:text-2xl text-[#252627]">BACK</span>
          </Link>

          {/* Title - centered */}
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#252627]"style={{marginTop: '1rem' , marginBottom: '1rem'}}>
            Events
          </h2>
        </div>

        {/* Horizontal Line - longer than images */}
        <div className="w-full flex justify-center mb-4 md:mb-6" style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)' }}>
          <div className="w-full max-w-[1200px] h-0.5 bg-[#252627]"></div>
        </div>

        {/* Latest Events subtitle - left aligned with first poster */}
        <div style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)', marginBottom: '0rem' , marginTop: '2rem'}}>
          <h3 className="font-pacific text-2xl md:text-3xl lg:text-4xl text-[#252627]">
            Latest Events
          </h3>
        </div>

        {/* Events Posters - centered, 3 columns */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)', paddingBottom: '1rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto w-full">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col items-center">
                <img 
                  src={event.image} 
                  alt={`Event ${index + 1}`} 
                  className="w-full h-auto object-cover"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Arrow */}
        {showArrow && (
          <div className="absolute bottom-4 left-1/2 z-20 scroll-arrow">
            <a 
              href="#upcoming" 
              className="flex flex-col items-center text-[#252627] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <svg 
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </a>
          </div>
        )}
      </section>

      {/* Upcoming Event Section with Footer */}
      <section 
        id="upcoming"
        className="w-full h-screen snap-start snap-always flex flex-col"
        style={{ backgroundColor: '#c3bdae' }}
      >
        {/* Upcoming Events Title */}
        <div 
          style={{
            paddingLeft: 'clamp(4rem, 8vw, 8rem)',
            paddingRight: 'clamp(4rem, 8vw, 8rem)',
            paddingTop: '2rem',
            paddingBottom: '1rem'
          }}
        >
          <h3 className="font-pacific text-3xl md:text-4xl lg:text-5xl text-[#252627]" style={{marginTop: '2rem' , marginBottom: '1rem', marginLeft: '-2rem'}}>
            Upcoming Events
          </h3>
        </div>

        {/* Upcoming Event Content */}
        <div 
          className="flex-1 flex items-center justify-center"
          style={{
            paddingLeft: 'clamp(1rem, 8vw, 4rem)',
            paddingRight: 'clamp(1rem, 4vw, 4rem)',
            paddingTop: '0rem',
            paddingBottom: '0rem'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full max-w-7xl mx-auto items-start">
            {/* Left - Date Image */}
            <div className="flex flex-col items-center md:items-start" style={{ padding: '1rem', paddingTop: '0', marginLeft: '-1rem', marginRight: '1rem' }}>
              <img 
                src="/30.png" 
                alt="30 January 2026" 
                className="w-full h-auto object-cover"
                style={{ borderRadius: '1.5rem' }}
              />
            </div>

            {/* Middle - Event Image */}
            <div className="flex flex-col items-center" style={{ marginLeft: '-4rem' ,marginRight: '2rem'}}>
              <img 
                src="/event4.png" 
                alt="Upcoming Event" 
                className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl h-auto object-cover"
                style={{ borderRadius: '5px' }}
              />
            </div>

            {/* Right - Text Content */}
            <div className="flex flex-col items-start"style={{ marginLeft: '-4rem' }}>
              <h3 className="font-pacific text-2xl md:text-2xl lg:text-5xl text-[#252627] mb-4 md:mb-6">
                Musical Instrument Donation
              </h3>
              <p className="font-times-condensed text-[#252627] text-xl md:text-xl lg:text-3xl leading-relaxed"style={{marginTop: '1rem'}}>
                Come and donate your unused instruments to those who are in need. It could be any instrument that you don't need now!
              </p>
            </div>
          </div>
        </div>

        {/* Footer inside the same section */}
        <Footer disableSnap={true} />
      </section>
    </div>
  )
}

export default Events

