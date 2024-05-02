import React from 'react'
import Header from '../Components/Header'
import Image from 'next/image'
import { getBlogByCategory } from '../../libs/client'
import Link from 'next/link'
import Footer from '../Components/Footer'

const page = async() => {
  const Works = await getBlogByCategory('mln-z35z00dd');
  return (
    <div>
      <Header />
      <section className='p-4'>
        <h1 className='mt-12 flex justify-center font-ZenMaruGothic font-black text-4xl'>私について</h1>
        <p className='mt-2 flex justify-center font-ZenMaruGothic font-bold text-xl'>About</p>
        <div className='mt-12 md:flex justify-center font-ZenMaruGothic font-bold'>
          <span className='flex justify-center items-center'>
            <img className='rounded-full' src={'https://pbs.twimg.com/profile_images/1751632570893393920/b6WEw3TV_400x400.jpg'} width={150} height={150} alt='my-icon'></img>
          </span>
          <span className='md:max-w-[400px] md:ml-16'>
            <p className='flex justify-center text-2xl m-[1rem_auto] md:m-0'>miyabitti(ピーマン)</p>
            <ul className='list-disc w-[65%] md:w-[100%] m-[auto]'>
              <li>19歳</li>
              <li>ニート</li>
              <li>秋田生まれ秋田育ち 秋田は災害少ないし子育てしやすいしで住みやすくていいところだぞ！！！</li>
              <li>HTML、CSS、JavaScriptの基本は書ける。</li>
              <li>Pythonかなんかのバックエンドも勉強したいなと考えているがJavaScriptもある程度マスターしたわけじゃないので手が出せていない。</li>
              <li>趣味はFPSやサンドボックスゲーム。他にネット麻雀、将棋観戦、競馬(まだ賭けられない)</li>
            </ul>
            <span className='flex justify-center w-full mt-4'>
              <a href='https://twitter.com/miyabitti_sub'><Image src={'/img/twitter-icon.svg'} width={24} height={24} alt='twitter-icon' className='hover:opacity-50'></Image></a>
              <a href="https://github.com/miyabitti256"><Image src={'/img/Github-icon.svg'} width={24} height={24} alt='Github-icon' className='hover:opacity-50'></Image></a>
            </span>
          </span>
        </div>
      </section>
      <section id='works'>
        <h1 className='mt-12 flex justify-center font-ZenMaruGothic font-black text-4xl'>作品</h1>
        <p className='mt-2 flex justify-center font-ZenMaruGothic font-bold text-xl'>Works</p>
        <div className='flex flex-wrap m-[3rem_auto] max-w-[865px]'>
          {Works.contents.map((works) => (
            <div key={works.id} className='m-[16px_auto]'>
              {works.thumbnail ? (
                <>
                <Link href={`/about-me/works/${works.id}`}>
                  <Image className='[border:solid_1px_#000] rounded-2xl hover:opacity-[0.8] [transition:all_.3s]' src={`${works.thumbnail.url}?w=256`} width={256} height={144} alt='thumbnail'></Image>
                </Link>
                <p className='flex justify-center mt-4 font-bold font-ZenMaruGothic'>{works.title}</p>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </section>
      <section id='skill'>
        <h1 className='mt-12 flex justify-center font-ZenMaruGothic font-black text-4xl'>スキル</h1>
        <p className='mt-2 flex justify-center font-ZenMaruGothic font-bold text-xl'>Skill</p>
        <div className='w-[80%] max-w-[865px] p-8 rounded-2xl bg-white m-[3rem_auto] [box-shadow:inset_4px_4px_4px_rgba(0,0,0,25%)]'>
          <ul className='flex flex-wrap justify-between [&>li]:w-[200px] [&>li]:m-[auto] [&_img]:m-[auto] [&_p]:m-[16px] [&_p]:flex [&_p]:justify-center'>
            <li>
              <Image src={'/img/skill-icons/html-1.svg'} width={92} height={106} alt='html5' />
              <p className='m-[auto]'>HTML</p>
            </li>
            <li>
              <Image src={'/img/skill-icons/css-3.svg'} width={92} height={106} alt='css3' />
              <p>CSS</p>
            </li>
            <li>
              <Image src={'/img/skill-icons/javascript-1.svg'} width={92} height={106} alt='javascript' />
              <p>JavaScript</p>
            </li>
            <li>
              <Image src={'img/skill-icons/typescript.svg'} width={106} height={106} alt='typescript' />
              <p>TypeScript</p>
              </li>
            <li>
              <Image src={'img/skill-icons/wordpress-icon.svg'} width={106} height={106} alt='wordpress' />
              <p>WordPress</p>
            </li>
            <li>
              <Image src={'img/skill-icons/react-2.svg'} width={106} height={106}  alt='react' />
              <p>React</p>
            </li>
            <li>
              <Image src={'img/skill-icons/next-js.svg'} width={106} height={106} alt='next-js' />
              <p>Next.js</p>
            </li>
            <li>
              <Image src={'img/skill-icons/tailwind-css-2.svg'} width={106} height={106} alt='tailwind-css' className='h-[106px]' />
              <p>TailwindCSS</p>
            </li>
          </ul>
        </div>
        <div className='flex justify-center mt-8 font-ZenMaruGothic p-[0_1.5rem]'>
          <p className='font-bold'>これらの言語、フレームワークを使用することができます。</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default page