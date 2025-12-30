function Footer() {
  return (
    <footer 
      className="w-full flex-shrink-0"
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
            <a 
              href="https://keycas.cn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-end gap-3 hover:opacity-80 transition-opacity"
            >
              <span className="font-times-condensed text-white text-base md:text-lg lg:text-xl">
                Powered By KeyCAS
              </span>
              <img 
                src="/keycasLogo.png" 
                alt="KeyCAS Logo" 
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

