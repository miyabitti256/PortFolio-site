import React, { FC } from 'react'
import "highlight.js/styles/atom-one-dark.css"

interface BlogBodyProps {
    body: string;
}

const BlogBody:FC<BlogBodyProps> = ({ body }) => {
  return (
    <div className='
    [&_a]:a-styles
    [&_ul]:ul-styles
    [&_ol]:ol-styles
    [&_hr]:hr-styles
    [&_img]:img-styles
    [&_h2]:h2-styles
    [&_h3]:h3-styles
    [&_p]:p-styles
    [&_pre]:codeblock-styles
    '>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </div>
  )
}

export default BlogBody