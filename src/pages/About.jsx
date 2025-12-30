import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function About() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    // 延迟1.5秒显示箭头
    const timer = setTimeout(() => {
      setShowArrow(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen w-full">
      {/* About Section */}
      <section 
        className="relative min-h-screen w-full snap-start snap-always flex items-center"
        style={{ backgroundColor: '#c3bdae' }}
      >
        {/* Back Button */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 md:left-12 z-20 flex items-center gap-3 hover:opacity-80 transition-opacity group"
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

        <div 
          className="w-full py-16 md:py-20 lg:py-24"
          style={{
            paddingLeft: 'clamp(4rem, 8vw, 8rem)',
            paddingRight: 'clamp(4rem, 8vw, 8rem)'
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-20 items-start lg:items-center">
            {/* Left Column - Text */}
            <div className="flex-1 lg:w-1/2 relative">
              <h2 className="font-anton text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 md:mb-8" style={{ color: '#252627', lineHeight: '1.1' }}>
                ABOUT
              </h2>
              <div className="w-40 md:w-48 lg:w-56 h-1 bg-[#252627] mb-6 md:mb-8"></div>
              <p className="font-pacific text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed" style={{ color: '#252627', marginTop: '2rem' }}>
                We aim to inspire students through music and help students enthusiastic about music but lack resources and opportunities with donated musical instruments and supportive music education.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="flex-1 lg:w-1/2 w-full flex flex-col gap-8 md:gap-10 lg:gap-12">
              <img 
                src="/about1.png" 
                alt="About 1" 
                className="w-full h-auto object-cover shadow-xl"
                style={{ borderRadius: '8px' }}
              />
              <img 
                src="/about2.png" 
                alt="About 2" 
                className="w-full h-auto object-cover shadow-xl"
                style={{ borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Arrow - positioned at bottom center of left text area, near screen bottom */}
        {showArrow && (
          <div 
            className="absolute bottom-8 z-20 scroll-arrow"
            style={{
              left: 'clamp(calc(4rem + 25%), calc(4rem + 25vw), calc(8rem + 25%))',
              transform: 'translateX(-50%)'
            }}
          >
            <a 
              href="#mission" 
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

      {/* Our Mission Section with Footer */}
      <section 
        id="mission"
        className="w-full h-screen snap-start snap-always flex flex-col"
        style={{ backgroundColor: '#252627' }}
      >
        {/* Our Mission Content */}
        <div 
          className="flex-1 flex flex-col justify-center"
          style={{
            paddingLeft: 'clamp(4rem, 8vw, 8rem)',
            paddingRight: 'clamp(4rem, 8vw, 8rem)',
            paddingTop: '4rem',
            paddingBottom: '2rem'
          }}
        >
          {/* Title */}
          <h2 className="font-anton text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-12 md:mb-16 lg:mb-20">
            OUR MISSION
          </h2>

          {/* Mission Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10" style={{marginTop: '3rem' }}>
            {/* Mission 1 */}
            <div className="flex flex-col">
              <img 
                src="/mission1.png" 
                alt="Mission 1" 
                className="w-full object-cover mb-4 md:mb-6"
                style={{ height: '250px', borderRadius: '8px' }}
              />
              <p className="font-pacific text-white text-base md:text-lg lg:text-xl leading-relaxed"style={{marginTop: '1rem' }}>
                Execution of support education in schools that lack resources for music education
              </p>
            </div>

            {/* Mission 2 */}
            <div className="flex flex-col">
              <img 
                src="/mission2.png" 
                alt="Mission 2" 
                className="w-full object-cover mb-4 md:mb-6"
                style={{ height: '250px', borderRadius: '8px' }}
              />
              <p className="font-pacific text-white text-base md:text-lg lg:text-xl leading-relaxed"style={{marginTop: '1rem' }}>
                Music storytelling events: A event that combines live music with vivid explanations
              </p>
            </div>

            {/* Mission 3 */}
            <div className="flex flex-col">
              <img 
                src="/mission3.png" 
                alt="Mission 3" 
                className="w-full object-cover mb-4 md:mb-6"
                style={{ height: '250px', borderRadius: '8px' }}
              />
              <p className="font-pacific text-white text-base md:text-lg lg:text-xl leading-relaxed"style={{marginTop: '1rem' }}>
                Music instrument donation: A home for instruments no longer used
              </p>
            </div>
          </div>
        </div>

        {/* Footer inside the same section */}
        <Footer />
      </section>
    </div>
  )
}

export default About

