import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 动态生成带背景的 favicon
function generateFavicon() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // 创建圆形裁剪路径
    const centerX = 32
    const centerY = 32
    const radius = 32
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.clip()
    
    // 绘制深色背景（圆形）
    ctx.fillStyle = '#282828'
    ctx.fillRect(0, 0, 64, 64)
    
    // 加载 logo 并绘制
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      // 计算 logo 尺寸，留出一些边距
      const padding = -1
      const logoSize = 64 - padding*2
      const logoX = padding
      const logoY = padding
      ctx.drawImage(img, logoX, logoY, logoSize, logoSize)
      
      // 将 canvas 转换为 favicon
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.querySelector("link[rel*='icon']") || document.createElement('link')
          link.type = 'image/png'
          link.rel = 'icon'
          link.href = url
          document.getElementsByTagName('head')[0].appendChild(link)
        }
      }, 'image/png')
    }
    img.src = '/logo.png'
  }
}

// 生成 favicon
generateFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
