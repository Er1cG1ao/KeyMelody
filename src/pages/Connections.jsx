import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Connections() {
  return (
    <div className="min-h-screen w-full">
      {/* Connections Section */}
      <section 
        className="relative min-h-screen w-full snap-start flex flex-col"
        style={{ backgroundColor: '#e6e4de' }}
      >
        {/* Header with Back Button and Title */}
        <div className="relative w-full flex items-center justify-center" style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
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
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#252627]"style={{marginTop: '3rem' , marginBottom: '1rem'}}>
            Connections
          </h2>
        </div>

        {/* Horizontal Line */}
        <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-12" style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)' }}>
          <div className="w-full max-w-[1400px] h-0.5 bg-[#252627]"></div>
        </div>

        {/* Content - Left Text and Right Image */}
        <div 
          className="flex-1 flex items-center justify-center"
          style={{
            paddingLeft: 'clamp(2rem, 4vw, 4rem)',
            paddingRight: 'clamp(2rem, 4vw, 4rem)',
            paddingTop: '-4rem',
            paddingBottom: '2rem'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-2 md:gap-4 lg:gap-6 w-full max-w-7xl mx-auto items-start">
            {/* Left - Text Content */}
            <div className="flex flex-col" style={{ maxWidth: 'none' , marginLeft: '2rem'}}>
              <div className="mb-6 md:mb-8">
                <h3 className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] mb-3 md:mb-4">
                🎵 School Collaborations
                </h3>
                <ul className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] leading-relaxed" style={{ listStyle: 'none', paddingLeft: '0.5em', paddingRight: '0.5em'}}>
                  <li style={{ position: 'relative', paddingLeft: '1em'}}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Event Hosts: Keystone Community Primary Schools
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '1em'}}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Beneficiary Schools: PuGongYing School (Beijing) and growing.
                  </li>
                </ul>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] mb-3 md:mb-4">
                🔄 Donation Network
                </h3>
                <ul className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] leading-relaxed" style={{ listStyle: 'none', paddingLeft: '0.5em' ,paddingRight: '0.5em'}}>
                  <li style={{ position: 'relative', paddingLeft: '1em' }}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Instrument Donors: The Keystone Community & Beyond
                  </li>
                  <li style={{ position: 'relative', paddingLeft: '1em' }}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Collection Points: Local partnering businesses.
                  </li>
                </ul>
              </div>

              <div className="mb-6 md:mb-8">
                <h3 className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] mb-3 md:mb-4">
                👥 Our Team
                </h3>
                <ul className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] leading-relaxed" style={{ listStyle: 'none', paddingLeft: '0.5em' ,paddingRight: '0.5em'}}>
                  <li style={{ position: 'relative', paddingLeft: '1em' }}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Volunteer Musicians & Organizers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] mb-3 md:mb-4">
                🤲 Supporters
                </h3>
                <ul className="font-pacific text-2xl md:text-2xl lg:text-4xl text-[#252627] leading-relaxed" style={{ listStyle: 'none', paddingLeft: '0.5em' ,paddingRight: '0.5em'}}>
                  <li style={{ position: 'relative', paddingLeft: '1em' }}>
                    <span style={{ position: 'absolute', left: '0', fontSize: '1em', lineHeight: '1.5' , fontFamily: 'times-new-roman'}}>•</span>
                    Event Attendees & Individual Donors
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Image */}
            <div className="flex flex-col items-center lg:items-start" style={{ marginRight: '2rem' }}>
              <img 
                src="/connections1.png" 
                alt="Connections" 
                className="h-auto object-cover"
                style={{ 
                  borderRadius: '8px',
                  maxWidth: 'clamp(25px, 30vw, 400px)',
                  width: 'auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Connections

