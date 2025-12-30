import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isAbout = location.pathname === '/about'
  
  // 根据页面决定文字颜色
  const textColor = isHome ? 'text-white' : 'text-[#252627]'

  return (
    <div className="absolute top-8 left-12 right-16 z-20 flex items-center">
      {/* Logo */}
      <Link to="/">
        <img 
          src="/logo.png" 
          alt="KeyMelody Logo" 
          className="h-[100px] md:h-[120px] lg:h-[140px] xl:h-[160px] w-auto flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer" 
        />
      </Link>
      
      {/* Navigation Bar */}
      <nav 
        className="flex-1 flex items-center justify-between pr-6"
        style={{
          marginLeft: 'clamp(28px, 5vw, 50px)'
        }}
      >
        <Link 
          to="/" 
          className={`font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity ${textColor}`}
        >
          HOME
        </Link>
        <Link 
          to="/about" 
          className={`font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity ${textColor}`}
        >
          ABOUT
        </Link>
        <a 
          href="#team" 
          className={`font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity ${textColor}`}
        >
          TEAM
        </a>
        <a 
          href="#events" 
          className={`font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity ${textColor}`}
        >
          EVENTS
        </a>
        <a 
          href="#connections" 
          className={`font-anton text-2xl md:text-3xl uppercase tracking-wide hover:opacity-80 transition-opacity ${textColor}`}
        >
          CONNECTIONS
        </a>
      </nav>
    </div>
  )
}

export default Navbar

