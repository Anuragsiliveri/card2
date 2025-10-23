import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BirthdayBook = () => {
  const [letterText, setLetterText] = useState("Happy Birthday to you!!! ❤️\n\nI still feel bad for not being there on your last birthday... I really wish I could've been. I actually got something thoughtful for you back then, and I'll make sure to give it to you when we meet again.\n\nThank you for coming back… even if it wasn't to reconnect or talk things through... it still meant a lot to me. I can't tell you how much I missed you, mate. Things have been different since you walked into my life... days are colourful in the best way possible.\n\nI'm not the expressive kind, never really have been. But with you… things are different. You make it easy to be myself. I love your rants, your random complaints, your lame stories... everything. I love how you find joy in little things, how you laugh at my dumb jokes, how you make me be myself and tolerate my annoying ass...\n\nYou really do feel like home to me, Keerthi. I just have a better day when you're in it. I wish I really met earlier so i had more time with you. once again... sorry if i ever hurt you...i'd hate to lose you again...\n\nHere's to us... for what we've shared, and to what still remains between us. Cheers to that. 💐\n\nenjoy the day.")

  const FloralDecoration = ({ className = "" }) => (
    <div className={`absolute ${className}`}>
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-rose-gold/30">
        <path d="M50 10 C60 20, 80 20, 90 30 C80 40, 60 40, 50 50 C40 40, 20 40, 10 30 C20 20, 40 20, 50 10 Z" fill="currentColor"/>
        <circle cx="50" cy="50" r="6" fill="currentColor"/>
        <path d="M50 50 L30 70 L50 90 L70 70 Z" fill="currentColor"/>
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Letter Container with Unfolding Animation */}
        <motion.div 
          className="relative bg-gradient-to-br from-soft-ivory to-warm-beige rounded-lg shadow-2xl overflow-hidden"
          initial={{ 
            scale: 0.3,
            rotateX: -90,
            opacity: 0,
            transformOrigin: "center center"
          }}
          animate={{ 
            scale: 1,
            rotateX: 0,
            opacity: 1
          }}
          transition={{ 
            duration: 1.2,
            ease: "easeOut",
            delay: 0.3
          }}
        >
          {/* Floral Decorations */}
          <FloralDecoration className="top-6 right-6" />
          <FloralDecoration className="bottom-6 left-6" />
          <FloralDecoration className="top-1/2 left-4" />
          <FloralDecoration className="top-1/3 right-8" />
          
          {/* Letter Border */}
          <div className="absolute inset-4 border-2 border-rose-gold/20 rounded-lg"></div>
          
          {/* Letter Content */}
          <motion.div 
            className="relative z-10 p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-script text-rose-gold mb-8 text-center"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              🎂 Happy Birthday, Keerthi! 🌸
            </motion.h1>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <textarea
                value={letterText}
                onChange={(e) => setLetterText(e.target.value)}
                className="editable-text text-lg md:text-xl text-gray-700 leading-relaxed min-h-[500px] w-full text-left font-serif resize-none"
                placeholder="Write your birthday letter here..."
                style={{ lineHeight: '1.8' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BirthdayBook
