
import { useRef } from 'react'
import './App.css'
import { useScroll, useTransform, motion } from 'motion/react';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
  })

  const rotateX = useTransform(scrollYProgress,[0,0.1],[10,0])
  const rotateY = useTransform(scrollYProgress,[0,0.1],[0,150])
  const textScale = useTransform(scrollYProgress,[0,0.1],[1,0.8])

  return (
    <>
    <div
    ref={containerRef} className='h-[400vh] bg-neutral-100 flex flex-col w-full items-center py-45 [perspective:800px] [transform-style:preserve-3d]'>
      <motion.h1 style={{scale:textScale}} className='text-4xl font-bold text-center'>Hi, I am Ankit Yadav <br /> I build websites!</motion.h1>
     <motion.div
     style={{
      rotateX: rotateX,
      y:rotateY,
      translateZ: "44px"
     }} className='bg-white w-[40%] h-[400px] -mt-2 p-1.5 rounded-3xl border border-neutral-100 shadow-2xl'>
      <div className='w-full h-full bg-black rounded-[18px] p-1.5'>
        <div className='w-full h-full bg-white rounded-[12px] '>
          <img 
            src="https://assets.aceternity.com/linear-demo.webp"
            className="w-full h-full object-cover rounded-[12px]"
            height={1024}
            width={1024}
            alt="Future plan graphic"
          />
        </div>
      </div>
     </motion.div>
    </div>
    </>
  )
}

export default App
