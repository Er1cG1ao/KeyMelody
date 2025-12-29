import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = '/mainBG.png'
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [])


  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section 
        className="relative h-screen w-full overflow-hidden snap-start snap-always"
      >
        {/* Background Image */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src="/mainBG.png" 
            alt="Background" 
            className="w-full h-full object-cover brightness-[0.8]"
          />
        </div>

        {/* Loading Overlay */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header with Logo and Navigation */}
          <div className="absolute top-8 left-12 right-16 z-20 flex items-center">
            {/* Logo - middle size between h-64 (256px) and h-[45px] */}
            <img src="/logo.png" alt="KeyMelody Logo" className="h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px] w-auto flex-shrink-0" />
            
            {/* Navigation Bar - spreads from logo to right edge */}
            {/* Logo to HOME spacing is 70% of nav item spacing */}
            <nav 
              className="flex-1 flex items-center justify-between pr-6"
              style={{
                marginLeft: 'clamp(28px, 5vw, 50px)' // Increased spacing between logo and HOME
              }}
            >
              <a href="#home" className="text-white font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity">HOME</a>
              <a href="#about" className="text-white font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity">ABOUT</a>
              <a href="#team" className="text-white font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity">TEAM</a>
              <a href="#events" className="text-white font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity">EVENTS</a>
              <a href="#connections" className="text-white font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity">CONNECTIONS</a>
            </nav>
          </div>

          {/* Main Content - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-white gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <h1 className="font-anton text-7xl md:text-8xl lg:text-9xl text-center">
              KeyMelody
            </h1>
            <p className="font-pacific text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center px-4">
              "Unlock Your Melodic Journey with KeyMelody!"
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="about"
        className="min-h-screen w-full snap-start snap-always"
        style={{ backgroundColor: '#252627', paddingTop: '2rem' }}
      >
        <div className="w-full" style={{ paddingBottom: '4rem' }}>
          {/* Title */}
          <h2 
            className="font-pacific text-5xl md:text-6xl lg:text-7xl text-white text-center"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          >
            Our Story
          </h2>

          {/* Content */}
          <div 
            className="text-white font-times-condensed text-xl md:text-2xl lg:text-3xl leading-relaxed text-left"
            style={{ 
              paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
              paddingRight: 'clamp(1.5rem, 4vw, 3rem)'
            }}
          >
            <p style={{ marginBottom: '2.5rem' }}>
              When we walked past an idle piano and played a sonata, we were imagining the fate of this idle piano several years later. Will it be placed until the strings are no longer taut and the pitch is no longer accurate, gradually being forgotten in the small corner of the past? We soon realized:
            </p>

            <p className="font-pacific text-xl md:text-2xl lg:text-3xl uppercase leading-relaxed" style={{ marginBottom: '2.5rem' }}>
              THE WASTE OF MUSICAL INSTRUMENTS IS A VERY COMMON AND WIDESPREAD SITUATION. IF WE START TO "SAVE" THESE IDLE MUSICAL INSTRUMENTS AND GIVE THEM THE RIGHT NOT TO BE FORGOTTEN, WILL SUCH WASTE BE REDUCED?
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              So, we initiated the project KeyMelody. We want to provide a home for forgotten musical instruments and find a more suitable place for them.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              To understand the reasons for the waste of musical Instruments from multiple perspectives, we conducted some investigations and studies, and thus recognized problem. Many people told us that only a few people in life can access truly meaningful and profound music resources. Without these interesting and professional music resources, it is very difficult for children to persist in learning musical instruments. This is completely different from what we once imagined. In our view, getting in touch with music resources and giving up music are at opposite poles. However, through investigation, we have gained a new understanding of this.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              It is precisely because of this relationship between the two that we plan to carry out meaningful, interesting and content-rich music storytelling activities to make children interested in music.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Through online collection, we received over twenty various idle Musical Instruments, including violins, flutes, French horns, recorder flutes, etc. Most of these instruments still retain the luster they had when touched for the first time, while some have been eroded by time. We repaired the damaged musical instrument and got in touch with a middle school located in Daxing District, Beijing - Dandelion Middle School. We donated the collected Musical Instruments to this school, hoping to endow them with new uses and missions.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              At Dandelion Middle School, these Musical Instruments were soon used as teaching supplies, and the children also gained happiness from them and developed a curiosity about music.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Within the school, we have also held several music storytelling activities, hoping to convey the charm of music to the primary school students through live performances and storytelling. We believe that perhaps this can enable more Musical Instruments to be cherished and make more people fall in love with music itself.
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              As a non-profit organization starting from scratch, we have encountered many unexpected difficulties during the course of our actions, but we have also reaped numerous moments full of warmth and hope. After the first activity, a little girl and her mother appeared before us and said, "The child really likes your storytelling activity. Through your storytelling, she has fallen in love with classical music... Now I've found the composer I like!"
            </p>

            <p style={{ marginBottom: '2.5rem' }}>
              Such feedback provided great comfort when we were worried about the quality of the event and also gave us the motivation to hold one event after another in the future. Since the establishment of KeyMelody, we have often felt fortunate: through this project, we can provide a new home for idle instruments and let them fulfill a special responsibility.
            </p>

            <p>
              We look forward to seeing the happiness on the faces of the children from Dandelion Middle School when they play music with these instruments. That is a unique and precious treasure. In the future, we will continue this mission, spreading the unique love of music to more people and granting idle Musical Instruments the right not to be forgotten.
            </p>
          </div>

          {/* Photos */}
          <div 
            className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8"
            style={{ 
              marginTop: '2.5rem',
              marginBottom: '0rem',
              paddingLeft: 'clamp(0.75rem, 2vw, 1.5rem)',
              paddingRight: 'clamp(0.75rem, 2vw, 1.5rem)'
            }}
          >
            <img 
              src="/mainPhoto1.png" 
              alt="Photo 1" 
              className="object-contain"
              style={{ height: '250px', width: 'auto' }}
            />
            <img 
              src="/mainPhoto2.png" 
              alt="Photo 2" 
              className="object-contain"
              style={{ height: '250px', width: 'auto' }}
            />
            <img 
              src="/mainPhoto3.png" 
              alt="Photo 3" 
              className="object-contain"
              style={{ height: '250px', width: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="w-full snap-start snap-always"
        style={{ backgroundColor: '#818d71' }}
      >
        <div 
          className="w-full px-8 md:px-12 lg:px-16 xl:px-20"
          style={{ 
            paddingTop: '4rem',
            paddingBottom: '4rem'
          }}
        >
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Contact us */}
            <div style={{ paddingLeft: '4rem', flex: '0 0 auto' }}>
              <h3 className="font-anton text-white text-2xl md:text-3xl lg:text-4xl" style={{ marginBottom: '1rem' }}>
                Contact us
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#818d71]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href="mailto:keymelody06@gmail.com" 
                  className="font-times-condensed text-white text-2xl md:text-2xl lg:text-2xl hover:opacity-80 transition-opacity"
                >
                  keymelody06@gmail.com
                </a>
              </div>
            </div>

            {/* Connect with us */}
            <div style={{ maxWidth: '300px', flex: '0 0 auto', marginLeft: '3rem' }}>
              <h3 className="font-anton text-white text-2xl md:text-3xl lg:text-4xl" style={{ marginBottom: '1rem' }}>
                Connect with us
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src="/insLogo.png" 
                    alt="Instagram" 
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <a 
                    href="https://www.instagram.com/keymelody27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-times-condensed text-white text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition-opacity"
                  >
                    keymelody27
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src="/RedNoteLogo.png" 
                    alt="Little Red Book" 
                    className="w-12 h-12 object-contain flex-shrink-0"
                  />
                  <a 
                    href="https://www.xiaohongshu.com/user/profile/62b5bae5000000001b024500?xsec_token=AB1qMRKX6vM8F9qx54nFH9SyjBMBqIuLw9MYuMpFo9d3w%3D&xsec_source=pc_search" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-times-condensed text-white text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition-opacity"
                  >
                    KeyMelody
                  </a>
                </div>
              </div>
            </div>

            {/* Powered By KeyCAS */}
            <div className="flex flex-col items-end gap-3" style={{ marginLeft: 'auto', paddingRight: '2rem' }}>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                 
              </span>
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                Powered By KeyCAS
              </span>
              <img 
                src="/keycasLogo.png" 
                alt="KeyCAS Logo" 
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
