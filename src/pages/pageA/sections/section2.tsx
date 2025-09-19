import React from 'react'
import P1 from  '@/assets/images/botcalm_A_cute_chubby_hippopotamus_with_a_big_happy_smile_stand_9a0e59de-2d3e-488f-9285-ec10e383ffa8 2.png'

export default function Section1() {
  return (
    <section className='bg-gradient-to-b from-[#C89EB8] via-[#C49DB9] via-[#B99BBC] to-[#B49ABE] min-h-screen'>
        <div className='max relative'>
          <div className='absolute z-10 px-[345px] mt-[43px] leading-[14px]'>
            <h1 className="lobster-regular text-[500px] tracking-[0] align-middle w-[1231px] h-[625px] text-[#FFFFFF]">NEKO</h1>
          </div>
          <div className='absolute mt-[430px] ml-[590px]'>
            <img src={P1} alt="pig" className='w-[626.67px] h-[650px] opacity-100'/>
          </div> 
        </div>
    </section>
  )
}
