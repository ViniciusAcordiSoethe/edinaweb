
import Image from 'next/image';
import avatar from '/public/avatar.jpg';

import { BsFacebook, BsFillMoonStarsFill , BsInstagram , BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineHome } from "react-icons/ai";

export default function Home() {
  return (
    <main>

        <section className='min-h-screen' >

          <nav className=' bg-gradient-to-b from-custom-dark-blue to-custom-green py-5 mb-12 rounded-b-md'>
            <ul className='flex items-center justify-center text-2xl'>
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
                <a href='#'className='text-white hover:text-custom-light-blue'>
                  <BsFacebook />
                </a>
              </li>
              <li className='mr-6'>
                <a href='#' className='text-white hover:text-custom-light-blue'>
                  <BsLinkedin />
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
            <h1 className='text-5xl py-2 mb-5 text-custom-green font-burtuns'>Edina Acordi</h1>
            <p className='mb-4'>Assessoria e Consultoria em <span className='text-custom-orange'>SISAN</span></p>
            <p className='leading-8 mb-6'>Idealizadora do Instituto de Soberania e Segurança Alimentar e Nutricional- ISSAN</p>
            <Image src={avatar} alt="avatar image" className='rounded-full mx-auto block' />
            <h2 className='text-2xl'>Site em construção</h2>
          </div>
        </section>

        <section>
          <div className='text-center p-10'>
            <h3 className='mb-4'>Oque é <span className='text-custom-orange'>SISAN</span> ?</h3>
            <p className='text-justify'>O Sistema Nacional de Segurança Alimentar e Nutricional (SISAN) é um sistema em construção, que tem por objetivo assegurar o direito humano à alimentação adequada, promovendo a realização de ações de alimentação e nutrição em todo o território nacional e em todos os níveis de governo.</p>
          </div>
          <div className='text-center p-10'>
            <h3 className='mb-4'>Porque preciso de um <span className='text-custom-orange'>SISAN</span> ?</h3>
            <p className='text-justify'>A implementação de um SISAN forte é uma estratégia inteligente para o estado ou município, já que promove o desenvolvimento econômico, a saúde da população, a resiliência a crises, a sustentabilidade ambiental, a redução da pobreza, o controle eficaz de recursos públicos e a colaboração entre diferentes partes interessadas. Isso cria um ambiente propício para um estado mais próspero e equitativo, beneficiando tanto o governo quanto a população em geral.</p>            
          </div>
        </section>
    </main>
  )
}
