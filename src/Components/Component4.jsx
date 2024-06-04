import React from 'react';
import { iphone, spiral, redcolor, verticalPhone } from '../images';

const Component4 = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Subcomponent 1 */}
      <div className="relative w-1/2 h-full">
        <img src={verticalPhone} alt="iPhone" className="absolute top-0 left-0 w-1/2 h-auto ml-40" style={{ zIndex: 3, bottom: '20px' }} />
        <img src={spiral} alt="Spiral" className="absolute top-0 left-0 w-3/4 h-auto" style={{ zIndex: 2 }} />
        <img src={redcolor} alt="Red Color" className="absolute top-0 left-6 w-2/2 h-auto" style={{ zIndex: 1 }} />
      </div>

      {/* Subcomponent 2 */}
      <div className="flex flex-col text-left p-4 w-1/2 h-full">
        <div className="flex flex-col mb-4">
        <h1 className="text-2xl font-extrabold">Fully Customizable</h1>
        </div>
        <p className='font-light line-clamp-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.</p>
      </div>
    </div>
  );
}

export default Component4;
