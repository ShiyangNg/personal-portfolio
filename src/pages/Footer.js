import React from 'react'
import FooterContent from './FooterContent'

export default function Footer() {
  return (
    <div 
    id="footer"
      className='relative h-[calc(100vh-70px)]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[calc(100vh-70px)] w-full'>
        <FooterContent />
      </div>
    </div>
  )
}