"use client";
import React from 'react'
import { CustomButton } from '.'
import Image from 'next/image';

export default function Hero() {
  const handleScroll = () => {
    return true;
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Você encontra aqui os melhores veículos com as melhores ofertas!
        </h1>
        <CustomButton 
          title = "Nosso estoque!"
          containerStyles="bg-black-blue text-white rounded-full mt-10 mx-auto"
          handleClick = {handleScroll}
          btnType="button"
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/creta.png" alt='hero_image' fill className='object-contain' />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}
