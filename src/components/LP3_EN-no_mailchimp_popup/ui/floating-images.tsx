import React from 'react';
import { motion } from "framer-motion"
import Floating, { FloatingElement } from "./parallax-floating"

const exampleImages = [
  "https://images.unsplash.com/photo-1689553079282-45df1b35741b",
  "https://images.unsplash.com/photo-1624344965199-ed40391d20f2",
  "https://images.unsplash.com/photo-1562016600-ece13e8ba570",
  "https://images.unsplash.com/photo-1726083085160-feeb4e1e5b00",
  "https://images.unsplash.com/photo-1640680608781-2e4199dd1579",
]

export default function FloatingImages() {
  return (
    <Floating sensitivity={-0.3}>
      <FloatingElement depth={1} className="top-[10%] left-[5%]">
        <motion.img
          src={exampleImages[0]}
          className="w-24 h-16 rounded-xl object-cover rotate-6 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
      </FloatingElement>

      <FloatingElement depth={2} className="top-[70%] left-[80%]">
        <motion.img
          src={exampleImages[1]}
          className="w-32 h-20 rounded-xl object-cover -rotate-6 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </FloatingElement>

      <FloatingElement depth={1.5} className="top-[30%] left-[85%]">
        <motion.img
          src={exampleImages[2]}
          className="w-28 h-24 rounded-xl object-cover rotate-[8deg] shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
      </FloatingElement>
    </Floating>
  )
}
