import React from 'react';
import logoImage from '../../assets/images/222.png'; // Adjust the path if you changed it
import Image from 'next/image';

const Logo = () => (
  <div className="flex items-center">
    <Image src={logoImage} alt="Rose Development Logo" width={75} height={100} />
    <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
      Rose Development 
    </span>
  </div>
);

export default Logo;

