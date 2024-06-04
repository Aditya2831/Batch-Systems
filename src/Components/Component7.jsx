import React from 'react'
import { motion } from "framer-motion"

const Component7 = () => {
  return (
    <div>
        <div className='flex justify-between ml-60 mr-60 mb-10 mt-40 font-semibold'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-extrabold'>uifry</h1>
                <h2>Help@Frybix.com</h2>
                <h2>+1234 5678 89</h2>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Links</h1>
                <h2>Home</h2>
                <h2>About Us</h2>
                <h2>Bookings</h2>
                <h2>Blog</h2>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Legal</h1>
                <h2>Terms Of Use</h2>
                <h2>Privacy Policy</h2>
                <h2>Cookie Policy</h2>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Product</h1>
                <h2>Take Tour</h2>
                <h2>Live Chat</h2>
                <h2>Reviews</h2>
            </div>

            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-xl'>Newsletter</h1>
                <h2>Stay Up To date</h2>
                <div className='flex gap-5'>
                    <input type="email" name="" id="" className='border-2 border-gray-500 text-center' placeholder='Enter your email'/>
                    <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="text-white font-chakraPetch bg-gradient-to-r from-slate-900 to-indigo-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-800/90 dark:shadow-lg dark:shadow-blue-800/40 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 w-[150px]  border-black h-[50px] mt-3"
          >
            SUBSCRIBE
          </motion.button>
                </div>
            </div>
        </div>

        <div className="my-8">
  <div className="h-0.5 bg-gradient-to-r from-transparent via-black to-transparent"></div>
</div>

    <h1 className='flex justify-center mb-5'>Copyright 2022 Uifry.Com All Rights Reserved</h1>
    </div>
  )
}

export default Component7