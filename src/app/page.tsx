
import { BsFacebook, BsFillMoonStarsFill , BsInstagram , BsWhatsapp } from 'react-icons/bs'
import { AiOutlineHome } from "react-icons/ai";

export default function Home() {
  return (
    <main className=''>
        <section className='min-h-screen' >

          <nav className=' bg-gradient-to-b from-custom-dark-blue to-custom-green py-5 mb-12 rounded-b-md'>
            <ul className='flex items-center justify-center'>
              <li className='mr-6'>
                <a href='#' className='text-white hover:text-custom-light-blue'>
                  <AiOutlineHome />
                </a>
              </li>
              <li className='mr-6'>
                <a href='https://www.instagram.com/edinaacordisan/' target='_blank' className='text-white hover:text-custom-light-blue'>
                  <BsInstagram />
                </a>
              </li>
              <li className='mr-6'>
                <a href='#' target='_blank' className='text-white hover:text-custom-light-blue'>
                  <BsFacebook />
                </a>
              </li>
              <li className='mr-6'>
                <a href='https://api.whatsapp.com/send?phone=554796742664' target='_blank' className='text-white hover:text-custom-light-blue'>
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                 <BsFillMoonStarsFill  className='text-white hover:text-custom-dark-blue' />
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 mb-5 text-custom-green'>Edina Acordi</h1>
            <p className='mb-3'>Assessoria e Consultoria em <span className='text-custom-orange'>SISAN</span></p>
            <p>Idealizadora do Instituto de Soberania e Segurança Alimentar e Nutricional- ISSAN</p>
            {/* Aviso Site */}
            <p className='text-5xl mb-2 mt-6'>Site em Construção</p>
            <p>Tente contato pelo WhatApp</p><a href='https://api.whatsapp.com/send?phone=554796742664' target='_blank' className='text-5xl text-black hover:text-custom-green flex justify-center mt-6'><BsWhatsapp /></a>
            <img className="mb-12 mt-12 mx-auto block" src="/avatar.jpg" alt="avatar image" />
          </div>
          
        </section>
    </main>
  )
}
