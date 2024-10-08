
import Image from 'next/image';
import avatar from '/public/avatar.jpg';

import { BsFillMoonStarsFill , BsInstagram , BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { AiOutlineHome } from "react-icons/ai";

import WhatsAppContact from './components/whatsText';

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
                <a href='#' className='text-white hover:text-custom-light-blue'>
                  <BsLinkedin />
                </a>
              </li>
              <li className='mr-6'>
               <a href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CELLPHONE_NUMBER}`}  target='_blank' className='text-white hover:text-custom-light-blue'>
                  <BsWhatsapp />
                </a>
              </li>
              {/* <li >
                 <BsFillMoonStarsFill  className='text-white hover:text-custom-dark-blue' />
              </li> */}
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 mb-5 text-custom-green font-burtuns'>Edina Acordi</h1>
            <p className='mb-4'>Assessoria e Consultoria em <span className='text-custom-orange'>SISAN</span></p>
            <p className='leading-8 mb-6'>Idealizadora do Instituto de Soberania e Segurança Alimentar e Nutricional- ISSAN</p>
            <Image src={avatar} alt="Edina Acordi Imagem Demonstrativa" className='rounded-full mx-auto block w-full md:w-1/2 lg:w-1/3' />
          </div>
        </section>

        <section className='md:flex md:flex-col md:justify-center'>
          <div className='text-center p-10 md:mx-40'>
            <h3 className='mb-4'>O que é <span className='text-custom-orange'>SISAN</span>?</h3>
            <p className='text-justify'>O Sistema Nacional de Segurança Alimentar e Nutricional (SISAN) é um sistema em construção, que tem por objetivo assegurar o direito humano à alimentação adequada, promovendo a realização de ações de alimentação e nutrição em todo o território nacional e em todos os níveis de governo.</p>
          </div>
          <div className='text-center p-10 md:mx-40'>
            <h3 className='mb-4'>Por que preciso de um <span className='text-custom-orange'>SISAN</span>?</h3>
            <p className='text-justify'>A implementação de um SISAN forte é uma estratégia inteligente para o estado ou município, já que promove o desenvolvimento econômico, a saúde da população, a resiliência a crises, a sustentabilidade ambiental, a redução da pobreza, o controle eficaz de recursos públicos e a colaboração entre diferentes partes interessadas. Isso cria um ambiente propício para um estado mais próspero e equitativo, beneficiando tanto o governo quanto a população em geral.</p>            
          </div>
          <div className='text-center p-10 md:mx-40'>
            <h3 className='mb-4'>Resultados de um <span className='text-custom-orange'>SISAN</span> eficaz</h3>
            <p className='text-justify'>Um SISAN bem estruturado pode resultar em melhorias significativas nos indicadores de saúde e nutrição, como a redução da desnutrição infantil, o combate à obesidade e o aumento do acesso a alimentos saudáveis. Além disso, contribui para a segurança alimentar das futuras gerações, garantindo que todos tenham acesso a uma alimentação adequada e nutritiva.</p>            
          </div>
        </section>

        <section className='md:flex md:flex-col md:justify-center'>
          <div className='text-center p-10 md:mx-40'>
            <WhatsAppContact />
          </div>
        </section>
    </main>
  )
}
