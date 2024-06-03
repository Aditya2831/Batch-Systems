import React from 'react';
import { iphone, spiral, redcolor, verticalPhone, verticalPhone2 } from '../images';

const Component3 = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Subcomponent 1 */}

     
      <div className="flex flex-col text-left p-4 w-1/2 h-full ml-10">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg  tracking-wider text-red-500">ADVANTAGES</h2>
          <h1 className="text-4xl font-extrabold">Why Choose UIFry?</h1>
        </div>
        <h1 className="text-2xl font-extrabold">Clever Notifications</h1>
        <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.</p>
      </div>

         {/* Subcomponent 2 */}
      <div className="relative w-1/2 h-full">
        <img src={verticalPhone2} alt="iPhone" className="absolute top-0 left-0 w-1/2 h-auto ml-40" style={{ zIndex: 3, bottom: '20px' }} />
        <img src={spiral} alt="Spiral" className="absolute top-0 left-0 w-3/4 h-auto" style={{ zIndex: 2 }} />
        <img src={redcolor} alt="Red Color" className="absolute top-0 left-0 w-1/2 h-auto" style={{ zIndex: 1 }} />
      </div>
    </div>
  );
}

export default Component3;
