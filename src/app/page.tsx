
import { BsFillMoonStarsFill , BsInstagram , BsWhatsapp } from 'react-icons/bs'
import { AiOutlineHome } from "react-icons/ai";

export default function Home() {
  return (
    <main className=''>
        <section className='min-h-screen' >

          <nav className=' bg-gradient-to-b from-slate-800 to-emerald-950 py-5 mb-12 rounded-b-md'>
            <ul className='flex items-center justify-center'>
              <li className='mr-6'>
                <a href='#' className='text-white hover:text-blue-800'>
                  <AiOutlineHome />
                </a>
              </li>
              <li className='mr-6'>
                <a href='#' className='text-white hover:text-blue-800'>
                  <BsInstagram />
                </a>
              </li>
              <li className='mr-6'>
                <a href='#' className='text-white hover:text-blue-800'>
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                 <BsFillMoonStarsFill  className='text-white' />
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h1 className='text-5xl py-2 mb-5'>Edina Acordi</h1>
            <p>Assessoria e Consultoria em SISAN</p>
            <p>Idealizadora do Instituto de Soberania e Segurança Alimentar e Nutricional- ISSAN</p>
            <img className="mb-12 mt-12 mx-auto block" src="/avatar.png" alt="avatar.png" />
          </div>
          
        </section>
    </main>
  )
}
