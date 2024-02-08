'use client'
import React, { useEffect, useState } from 'react'
import './CSS/Loding.css'

const Loding = () => {
    const [ RtoLAnimetion, setRtoLAnimation ] = useState(false);
    const [ opacity, setOpacity ] = useState(false);
    const [ loding, setLoding ] = useState(true);

    useEffect(() => {
        const LtoR = setTimeout(() => {
            setRtoLAnimation(true);
        }, 4000);
        const Opacity = setTimeout(() => {
            setOpacity(true);
        }, 5500);
        const animetion_timer = setTimeout(() => {
            setLoding(false);
        }, 7000);
    })
  return (
    <>
     {loding && 
     <div className='absolute w-[100vw] h-[100vh] overflow-hidden'>
     <div className={`Loding ${opacity? `opacity-0`: ``} w-screen h-screen flex items-center justify-center absolute overflow-hidden bg-[#fff] z-[1000] [text-shadow:4px_4px_4px_rgba(0,0,0,25%)]`}>
        <span className='PortFolio font-Inter font-black'>My-</span>
        <span className='PortFolio font-Inter font-black text-[#ad00ff]'>PortFolio</span>
     </div>
     <div className={`cover ${RtoLAnimetion ? `active` : ``} absolute top-0 left-0 w-[120%] h-full bg-[#94bf01] translate-x-[100%] z-[1001] overflow-hidden`}>
     </div>
     </div>
     }
    </>
  )
}

export default Loding