import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-96'>
    <div className='flex my-6 ml-20 gap-20'>
        <h1 className='font-bold text-2xl '>uifry</h1>
        <h2 className='font-semibold text-xl text-red-600' >Home</h2>
        <h2 className='font-semibold text-xl' >About Us</h2>
        <h2 className='font-semibold text-xl'>Pricing</h2>
        <h2 className='font-semibold text-xl'>Features</h2>
    </div>
    <div className='my-6 ml-60'>
      <button type="submit" className='bg-black text-white px-5 py-3 rounded-md'>Download</button>
    </div>
    </div>
  )
}

export default Navbar