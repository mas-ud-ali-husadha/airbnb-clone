import { MenuType } from '@/types/FooterTypes'
import React from 'react'

const Menu = ({title, desc} : MenuType) => {
  return (
    <div className='flex flex-col gap-1 text-sm'>
        <span className='font-medium'>{title}</span>
        <span className='text-gray-600 truncate'>{desc}</span>
    </div>
  )
}

export default Menu