import React from 'react'
import { BlogContents, getBlog, getDetail } from '../../../../libs/client'
import Image from 'next/image';
import Header from '@/app/Components/Header';
import BlogBody from '@/app/Components/Works/BlogBody';
import { syntaxhighlight } from '../../../../libs/syntaxhighlight';

export async function generateStaticParams() {
    const Blog = await getBlog();
    const paths = Blog.contents.map((content:BlogContents) => `/about-me/works/${content.id}` );
    return paths;
}

const page = async(context:any) => {
    const id = context.params.id;
    const data = await getDetail(id);
    const Blog = syntaxhighlight(data);

  return (
    <div className='w-[95%] m-[auto] container'>
        <Header />
        <h1 className='m-12 flex justify-center font-ZenMaruGothic font-bold text-4xl'>{Blog.title}</h1>
        <div className='bg-white max-w-[865px] m-[1rem_auto] p-8 rounded-2xl [box-shadow:inset_4px_4px_4px_rgba(0,0,0,25%)]'>
            {Blog.thumbnail ? (
                <div className='flex justify-center'>
                    <Image className='[border:solid_1px_#ddd] m-[1rem_0]' src={`${Blog.thumbnail.url}`} width={865} height={486.5} alt='thumbnail' />
                </div>
            ) : (null)}
            <BlogBody body={Blog.body} />
        </div>
    </div>
  )
}

export default page