'use client'
import React from 'react'
import './CSS/Header.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='relative z-10'>
        <nav>
            <ul className='container max-w-[600px] m-[auto] p-4 flex justify-between item-center text-xl font-bold font-ZenMaruGothic'>
                <li className='relative min-w-[50px]'>
                  <Link href={'/'}>
                    <Image src={'/img/home.svg'} width={45} height={40} alt='home' className='m-[auto]'/>
                    <span className='hidden md:inline'>ホーム</span>
                  </Link>
                </li>
                <li className='relative min-w-[50px]'>
                  <Link href={'/about-me/'}>
                    <Image src={'/img/user.svg'} width={40} height={40} alt='about-me' className='m-[auto]'/>
                    <span className='hidden md:inline'>私について</span>
                  </Link>
                </li>
                <li className='relative min-w-[50px]'>
                  <Link href={'/about-me/#works'}>
                    <Image src={'/img/gallery.svg'} width={40} height={40} alt='gallery' className='m-[auto]'/>
                    <span className='hidden md:inline'>作品</span>
                  </Link>
                </li>
                <li className='relative min-w-[50px]'>
                  <Link href={'/about-me/#skill'}>
                    <Image src={'/img/technology.svg'} width={40} height={40} alt='skill' className='m-[auto]'/>
                    <span className='hidden md:inline'>スキル</span>
                  </Link>
                </li>
                <li className='relative min-w-[50px]'>
                  <Link href={'/contact/'}>
                    <Image src={'/img/mail.svg'} width={37.5} height={29} alt='contact' className='m-[auto] h-[40px]'/>
                    <span className='hidden md:inline'>お問い合わせ</span>
                  </Link>
                  </li>
            </ul>
        </nav>
        <div className='img1'></div>
        <div className="img2"></div>
    </header>
  )
}

export default Header