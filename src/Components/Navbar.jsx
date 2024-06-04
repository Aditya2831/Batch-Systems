import React from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className='flex gap-80'>
    <div className='flex my-10 ml-20 gap-20 font-serif '>
        <button className='font-extrabold text-2xl  '>uifry</button>
        <button className='font-semibold text-xl text-red-600' >Home</button>
        <button className='font-semibold text-xl' >About Us</button>
        <button className='font-semibold text-xl'>Pricing</button>
        <button className='font-semibold text-xl'>Features</button>
    </div>
    <div className='my-6 ml-60'>
    <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-[160px]  border-black h-[60px] mt-3"
          >
            DOWNLOAD
          </motion.button>
    </div>
    </div>
  )
}

export default Navbar