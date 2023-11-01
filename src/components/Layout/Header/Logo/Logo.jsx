import Image from 'next/image';
import React from 'react';


export default function Logo() {
  return (
    <div className='d-flex justify-content-center'>
        <Image src='/android-chrome-192x192.png' width={150} height={120} alt='My website main logo'/>
    </div>
  )
}
