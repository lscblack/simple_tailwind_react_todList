import React from 'react';
import { data } from '../react-data';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-38 text-white  p-4 text-center">
      <p className='font-normal'>© {new Date().getFullYear()} {data} All rights reserved.</p>
    </footer>
  );
};
