import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    // 预加载主页背景图
    const img = new Image()
    img.src = '/mainBG.png'
    img.onload = () => {
      setImageLoaded(true)
    }

    // 预加载所有其他页面的图片资源
    const imagesToPreload = [
      // About 页面
      '/about1.png',
      '/about2.png',
      '/mission1.png',
      '/mission2.png',
      '/mission3.png',
      // Team 页面
      '/team1.png',
      '/team2.png',
      '/team3.png',
      '/team4.png',
      // Events 页面
      '/event1.png',
      '/event2.png',
      '/event3.png',
      '/event4.png',
      '/30.png',
      // Connections 页面
      '/connections1.png',
      // Home 页面其他图片
      '/mainPhoto1.png',
      '/mainPhoto2.png',
      '/mainPhoto3.png',
      // 通用资源
      '/logo.png',
      '/insLogo.png',
      '/RedNoteLogo.png',
      '/keycasLogo.png'
    ]

    // 预加载所有图片
    imagesToPreload.forEach((src) => {
      const preloadImg = new Image()
      preloadImg.src = src
      // 使用 link preload 进行更积极的预加载
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, [])

  useEffect(() => {
    // 延迟1.5秒显示箭头
    const timer = setTimeout(() => {
      setShowArrow(true)
    }, 1500)
    return () => clearTimeout(timer)
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
          <Navbar />

          {/* Main Content - Centered */}
          <div className="flex-1 flex flex-col items-center justify-center text-white gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            <h1 className="font-anton text-7xl md:text-8xl lg:text-9xl text-center">
              KeyMelody
            </h1>
            <p className="font-pacific text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center px-4">
              "Unlock Your Melodic Journey with KeyMelody!"
            </p>
          </div>

          {/* Scroll Arrow */}
          {showArrow && (
            <div className="absolute bottom-8 left-1/2 z-20 scroll-arrow">
              <a 
                href="#story" 
                className="flex flex-col items-center text-white hover:opacity-80 transition-opacity cursor-pointer"
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
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        id="story"
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

      <Footer />
    </div>
  )
}

export default Home

