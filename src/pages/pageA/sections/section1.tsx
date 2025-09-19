import React from 'react'
import Button from '@/components/ui/button.tsx'
import P1 from  '@/assets/images/botcalm_A_cute_chubby_hippopotamus_with_a_big_happy_smile_stand_9a0e59de-2d3e-488f-9285-ec10e383ffa8 2.png'
import Social from '@/components/ui/social.tsx'
import Label from '@/components/ui/lable.tsx'

export default function Section1() {
  return (
    <section className='bg-gradient-to-b from-[#C89EB8] via-[#C49DB9] via-[#B99BBC] to-[#B49ABE] min-h-screen overflow-x-auto'>
        <div className='max relative '>
          <div className='absolute z-10 left-[345px] top-[-43px] w-[1231px] h-[412px]'>
            <div className="lobster-regular text-[500px] align-text-top text-[#FFFFFF] ">NEKO</div>
          </div>
          <div className='absolute top-[430px] left-[590px]'>
            <img src={P1} alt="pig" className='w-[626.67px] h-[650px]'/>
          </div>
          <div className='absolute w-[672px] h-[184px] top-[555px] left-[1208px]'>
            <h1 className='madimi-one-regular text-[64px] text-[#FFFFFF]'>Neko: Embrace the bold,
live powerful, live the Neko way.</h1>
          </div>
          <div className='absolute top-[777px] left-[1317px] mt-[38px]'>
            <Button/>
          </div>
          <div className='absolute top-[917px] left-[133px]'>
            <Social/>
          </div>
          <div className='absolute top-[1050px]'>
            <Label text="NEKO THE FIRST 3D AVATAR PROJECT ON THE BLOCKCHAIN"/>
          </div>
        </div>
    </section>
  )
}
