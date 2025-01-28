import React from 'react'

import image from "./images/SettingSoon.svg"; 

export default function Soon() {
  return (
    <>
   
    <div>

<div className="bg-gray-100">
  <div className="min-h-screen flex flex-col justify-center items-center">
    <img src= {image} alt="Logo" class="mb-8 h-40"/>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">Website is under maintenance</h1>
    <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">We're dedicated to enhancing user satisfaction. Keep an eye out for updates!</p>
  </div>
</div>

    </div>
    </>
  )
}


