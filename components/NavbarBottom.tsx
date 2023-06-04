import React from 'react';
import { phoneImg } from '../public/assets/images';
import Image from 'next/image';
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const NavbarBottom = () => {
  return (
    <div className='max-w-container mx-auto py-2 px-6 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Image className='w-6' src={phoneImg} alt='phoneImg' />
          <p className='text-sm font-semibold'>How do your want you items?</p>
          <FiChevronDown />
          <span className='w-[1px] h-4 bg-white inline-flex ml-2'></span>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-zinc-100'> Sacramento, 95829</p>
          <FaPlaceOfWorship />
          <p className='text-sm text-zinc-100'> Sacramento Supercenter</p>
        </div>
      </div>
      <ul className='flex gap-6 text-sm font-semibold'>
        <li className='bottomNavLi'>Deals</li>
        <li className='bottomNavLi'>Easter</li>
        <li className='bottomNavLi'>Grocery & essentials</li>
        <li className='bottomNavLi'>Home</li>
        <li className='bottomNavLi'>Tech</li>
        <li className='bottomNavLi'>Fashion</li>
        <li className='bottomNavLi'>Auto</li>
        <li className='bottomNavLi'>Walmart+</li>
      </ul>
    </div>
  )
}

export default NavbarBottom