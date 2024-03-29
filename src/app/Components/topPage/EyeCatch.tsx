import React from 'react'
import { Button } from '@mui/material'
import './CSS/EyeCatch.css'
import Link from 'next/link'
import DragTextEditer from './DragTextEditer'

const EyeCatch = () => {
  return (
    <>
      <div className="eyecatch max-w-[1200px] h-[100vh] overflow-hidden m-[auto] relative">
        <div className="container p-6 font-Inter [text-shadow:4px_4px_4px_rgba(0,0,0,25%)] absolute top-[45%] md:top[50%] translate-y-[-50%] left-[5%] md:left-0 z-10">
          <h2 className='welcome w-[fit-content] font-extrabold text-[48px] md:text-[96px] text-[#573cff]'>Welcome</h2>
          <div className='flex font-extrabold w-[fit-content]'>
            <h2 className='to-my text-[24px] md:text-[48px] translate-y-[24px] md:translate-y-[48px]'>to My</h2>
            <h2 className='portfolio ml-4 text-[48px] md:text-[96px] text-[#ad00ff]'>Portfolio</h2>
          </div>
          <span className='flex flex-wrap w-[fit-content] md:text-[24px] font-extrabold'>
            <p className='text-[#f00]'>独学</p>
            <p>で</p>
            <p className='text-[#ad00ff]'>フロントエンド</p>
            <p>の</p>
            <p className='text-[#573cff]'>コーディング</p>
            <p>を</p>
            <p className='text-[#f00]'>学びました。</p>
          </span>
          <div className='mt-4'>
            <Link href={"/about-me/"}>
              <Button variant="contained" className='bg-[#573CFF] m-[2rem_auto]'>もっと詳しく</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='w-[100vw] h-[100vh] absolute top-0 left-0 overflow-hidden'>
        <DragTextEditer />
      </div>
     
    </>
  )
}

export default EyeCatch