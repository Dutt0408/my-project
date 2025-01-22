import React from 'react'
import Titleimage from './images/Titleimage.png';

export default function Sponsors() {
  return (
    <div className="relative flex justify-center items-center m-0 p-0">
      <img src={Titleimage} alt="Title" className="w-full h-auto object-cover" />
      <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline" style={{ textDecorationColor: "#e53e50" }}>
          SPONSORS
        </h2>
      </div>
    </div>
  )
}
