import React from 'react';
import { iphone, spiral, redcolor, verticalPhone } from '../images';

const Component3 = () => {
  return (
    <div className="flex flex-row">
      {/* Subcomponent 1 */}
      <div className="relative w-1/2">
      <img src={verticalPhone} alt="iPhone" className="absolute top-0 left-0 w-1/2 h-auto ml-40" style={{ zIndex: 3, bottom: '20px' }} />
        <img src={spiral} alt="Spiral" className="absolute top-0 left-0 w-3/4 h-auto" style={{ zIndex: 2 }} />
        <img src={redcolor} alt="Red Color" className="absolute top-0 left-0 w-1/2 h-auto" style={{ zIndex: 1 }} />
      </div>

      {/* Subcomponent 2 */}
      <div className="flex flex-col text-left p-4 w-1/2">
        <div className="flex flex-col mb-4">
          <h2 className="text-lg font-bold">FEATURES</h2>
          <h1 className="text-2xl font-bold">Uifry Premium</h1>
        </div>
        <ul className="space-y-4">
          <li className="space-y-2">
            <h3 className="text-xl font-semibold">Budgeting Intervals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.</p>
          </li>
          <li className="space-y-2">
            <h3 className="text-xl font-semibold">Budgeting Intervals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.</p>
          </li>
          <li className="space-y-2">
            <h3 className="text-xl font-semibold">Budgeting Intervals</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus ultrices urna nec gravida. Aliquam lobortis urna ut purus dignissim dictum.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Component3;
