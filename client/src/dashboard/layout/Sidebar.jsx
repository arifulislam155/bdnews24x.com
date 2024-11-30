import React from 'react'
import {Link} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
      <div className='h-[70px] flex justify-center items-center'>
        <Link to='/'>
        <img src="https://amarlodge.com/app-logo.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}
