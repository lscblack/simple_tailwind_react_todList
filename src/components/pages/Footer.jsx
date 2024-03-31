import React from 'react';
import { data } from '../react-data';

export const Footer = () => {
  return (
    <footer className="bg-white mt-38 text-gray-500  p-4 text-center">
      <p className='font-normal'>© {new Date().getFullYear()} {data} All rights reserved.</p>
    </footer>
  );
};
