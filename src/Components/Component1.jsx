import React from 'react'
import Navbar from './Navbar'
import { V, iphone, iphoneAligned, spiral } from '../images'
import { motion } from "framer-motion"

const Component1 = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
        
        <div className='flex flex-col ml-20 gap-5'>
          <div>
            <h1 className='text-3xl font-semibold'>Make The Best</h1>
            <h1 className='text-3xl font-semibold'>Final Decisions</h1>
          </div>

          <div>
          <p className='line-clamp-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices
          </p>
          </div>

          <div className='flex gap-5'>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[180px]  border-black h-[60px] mt-3"
          >
            GET STARTED
          </motion.button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[180px]  border-black h-[60px] mt-3"
          >
            WATCH VIDEO
          </motion.button>
          </div>

          <div>
          <img src={V} alt="" />
        </div>

        </div>
       

        <div className="relative w-1/2 h-full ml-40">
        <img src={spiral} alt="iPhone" className="absolute right-80 w-2/3 h-auto ml-40 top-0" style={{ zIndex: 1, bottom: '20px' }} />

        <img src={iphone} alt="Spiral" className="absolute top-10 left-28 w-1/2 h-auto" style={{ zIndex: 2 }} />
        
        <img src={iphoneAligned} alt="Spiral" className="absolute top-10 left-18 w-1/2 h-auto" style={{ zIndex: 4 }} />

        <img src={iphone} alt="Red Color" className="absolute top-10 left-12 w-1/2 h-auto" style={{ zIndex: 3 }} />
       
      </div>
    </div>
    </>
  )
}

export default Component1