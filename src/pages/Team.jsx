import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Team() {
  const teamMembers = [
    {
      name: 'Alicia Chai',
      role: 'FOUNDER',
      image: '/team1.png'
    },
    {
      name: 'Page Zhang',
      role: 'LEADER',
      image: '/team2.png'
    },
    {
      name: 'Will Wang',
      role: 'LEADER',
      image: '/team3.png'
    },
    {
      name: 'Gaga Shen',
      role: 'LEADER',
      image: '/team4.png'
    }
  ]

  return (
    <div className="min-h-screen w-full">
      {/* Team Section */}
      <section 
        className="relative min-h-screen w-full snap-start flex flex-col"
        style={{ backgroundColor: '#252627' }}
      >
        {/* Header with Back Button and Title */}
        <div className="relative w-full flex items-center justify-center" style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
          {/* Back Button */}
          <Link 
            to="/" 
            className="absolute left-8 md:left-12 z-20 flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <svg 
              className="w-6 h-6 md:w-8 md:h-8 text-white transform group-hover:-translate-x-1 transition-transform" 
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
            <span className="font-anton text-xl md:text-2xl text-white">BACK</span>
          </Link>

          {/* Title - centered */}
          <h2 className="font-anton text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white">
            Our Team
          </h2>
        </div>

        {/* Horizontal Line - longer than images */}
        <div className="w-full flex justify-center mb-8 md:mb-10 lg:mb-12" style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)' }}>
          <div className="w-full max-w-[1200px] h-0.5 bg-white"></div>
        </div>

        {/* Team Members Grid - centered */}
        <div className="flex-1 flex items-center justify-center" style={{ paddingLeft: 'clamp(4rem, 8vw, 8rem)', paddingRight: 'clamp(4rem, 8vw, 8rem)', paddingBottom: '1rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 gap-y-2 md:gap-y-4 lg:gap-y-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-start">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full max-w-[200px] md:max-w-[220px] lg:max-w-[260px] h-auto object-cover mb-3 md:mb-4"
                  style={{ borderRadius: '8px', marginTop: '0rem' }}
                />
                <h3 className="font-anton text-xl md:text-2xl lg:text-3xl text-white mb-2 md:mb-3 text-left"style={{marginTop: '1rem' }}>
                  {member.name}
                </h3>
                <p className="font-anton text-white text-base md:text-l lg:text-lg text-left">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Team

