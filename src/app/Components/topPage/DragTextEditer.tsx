'use client'

import React, { useState, MouseEvent, useEffect } from 'react';
import Image from 'next/image';

interface Position {
 x: number;
 y: number;
}

const DragTextEditer: React.FC = () => {
 const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
 const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const initialX = event.clientX - position.x;
    const initialY = event.clientY - position.y;

    const handleMouseMove = (event: any) => {
      setPosition({
        x: event.clientX - initialX,
        y: event.clientY - initialY,
      });
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
 };

 useEffect(() => {
    // ビューポートサイズを取得し、初期位置を指定
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    setPosition({ x: vw * 0.43, y: vh * 0.2 });
   }, []);

 return (
    <div
      className="textEditer hidden md:block"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        overflow: 'visible',
      }}
      onMouseDown={handleMouseDown}
    >
      <Image src={"/img/textediter.svg"} loading='eager' width={944} height={668} alt='textediter' onMouseDown={handleMouseDown} className='max-w-[none]' />
    </div>
 );
};

export default DragTextEditer;