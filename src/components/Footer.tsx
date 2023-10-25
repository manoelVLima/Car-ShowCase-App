import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants'; 

export default function Footer() {
  return (
    <footer className='flex flex-col text-black-blue mt-5 border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 py-10'>
          <div className='flex flex-col justify-start items-start gap-6'>
            <Image src="/jeremias-veiculo.png" alt='logo' height={18} width={118} className='object-contain' />
            <p className='text-base text-gray-700'>
              2023 &copy; Todos os direitos reservados
            </p>
          </div>
          <div className='footer__links'>
            {footerLinks.map((link,index) => (
              <div key={index} className='footer__link'>
                <h3 className='font-bold'>
                  {link.title}
                </h3>
                {
                  link.links.map((item,index) => (
                    <Link 
                      key={index}
                      href={item.url}
                      className='text-gray-500'
                    >
                      {item.title}
                    </Link>
                  ))
                }
              </div>
            ))}
          </div>
          </div>
          <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>
              @2023 &copy; Todos os direitos reservados
            </p>
            <div className='footer__copyrights-link'>
                <Link href="/" className=''>
                  Privacy Policy
                </Link>
                <Link href="/" className=''>
                  Terms of Use
                </Link>
            </div>
          </div>
    </footer>
      )
}
