import React from 'react'
import Button from '@/components/ui/button.tsx'
import P1 from  '@/assets/images/botcalm_A_cute_chubby_hippopotamus_with_a_big_happy_smile_stand_9a0e59de-2d3e-488f-9285-ec10e383ffa8 2.png'
import Social from '@/components/ui/social.tsx'
import Label from '@/components/ui/lable.tsx'
import P2 from '@/assets/images/botcalm_Create_a_vector_illustration_of_a_friendly_hippopotamus_5bb5d169-74e3-4bf2-9b07-d45f4670100c 1.png'

export default function Section1() {
  return (
    <section className='bg-gradient-to-b from-[#C89EB8] via-[#C49DB9] via-[#B99BBC] to-[#B49ABE] min-h-screen w-full overflow-x-hidden'>
        <div className='max relative w-full min-h-screen'>
          {/* Social Icons for Mobile - Top */}
          <div className="
            absolute z-20 flex justify-center w-full
            top-[27px]
            sm:hidden
          ">
            <Social />
          </div>
        <div className="absolute justify-self-center w-[255px] h-[369px] top-[90px] block sm:hidden">
          <div className="text-[200px] lobster-regular text-[#FFFFFF] leading-[0.8] whitespace-pre-line">
            NE{`\n`}KO
          </div>
        </div>

          <div className='justify-self-center absolute top-[670px] z-20 block sm:hidden '>
              <Button />
          </div>

          <div className="
            absolute z-10 hidden sm:block
            w-full sm:w-[80%] md:w-[85%] lg:w-[90%] xl:w-[90%] 2xl:w-[1231px]
            h-[150px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[380px] 2xl:h-[412px]
            left-0 sm:left-[10%] md:left-[7.5%] lg:left-[5%] xl:left-[5%] 2xl:left-[345px]
            top-[100px] sm:top-[25px] md:top-[30px] lg:top-[35px] xl:top-[40px] 2xl:top-[0px]
          ">
            <div className="lobster-regular leading-none text-[#FFFFFF]
              text-[200px] sm:text-[250px] md:text-[300px] lg:text-[380px] xl:text-[450px] 2xl:text-[500px]
            ">
              NEKO
            </div>
          </div>
           {/* SM HIPPO Image */}
          <div className="
            absolute block
            sm:hidden
            md:hidden
            lg:hidden
            xl:hidden
            2xl:hidden
            top-[410px]
            justify-self-center
          ">
            <img
              src={P2}
              alt="pig"
              className="
                w-[277px] h-[356px] 
                
              "
            />
          </div>
          {/* LG HIPPO Image */}

              <div className="
            hidden 
            sm:block sm:absolute
            sm:top-[120px] sm:left-[180px] 
            md:top-[180px] md:left-[280px] 
            lg:top-[240px] lg:left-[380px] 
            xl:top-[280px] xl:left-[480px] 
            2xl:top-[330px] 2xl:left-[590px]
          ">
            <img
              src={P1}
              alt="pig"
              className="
                w-[320px] h-[340px] 
                sm:w-[400px] sm:h-[420px] 
                md:w-[480px] md:h-[500px] 
                lg:w-[550px] lg:h-[570px] 
                xl:w-[590px] xl:h-[610px] 
                2xl:w-[626.67px] 2xl:h-[650px]
              "
            />
          </div>

          <div className="
            absolute hidden sm:block
            w-[90vw] sm:w-[400px] md:w-[500px] lg:w-[580px] xl:w-[620px] 2xl:w-[672px]
            h-[120px] sm:h-[140px] md:h-[150px] lg:h-[160px] xl:h-[170px] 2xl:h-[184px]
            top-[280px] sm:top-[350px] md:top-[420px] lg:top-[480px] xl:top-[510px] 2xl:top-[535px]
            left-[5vw] sm:left-[500px] md:left-[700px] lg:left-[900px] xl:left-[1100px] 2xl:left-[1208px]
          ">
            <h1 className="madimi-one-regular text-[#FFFFFF]
              text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[60px] 2xl:text-[64px]
              leading-[40px] sm:leading-[48px] md:leading-[56px] lg:leading-[64px] xl:leading-[68px] 2xl:leading-[73px]
            ">
              Neko: Embrace the bold,<br/>
              live powerful, live the Neko way.
            </h1>
          </div>

          <div className="
            absolute hidden sm:block
            top-[400px] sm:top-[500px] md:top-[600px] lg:top-[680px] xl:top-[730px] 2xl:top-[777px]
            left-[5vw] sm:left-[500px] md:left-[700px] lg:left-[900px] xl:left-[1100px] 2xl:left-[1317px]
          ">
            <Button/>
          </div>

          <div className="order 1 sm:order-2
            absolute hidden sm:block
            top-[450px] sm:top-[550px] md:top-[650px] lg:top-[730px] xl:top-[780px] 2xl:top-[817px]
            left-[5vw] sm:left-[50px] md:left-[100px] lg:left-[140px] xl:left-[160px] 2xl:left-[180px]
          ">
            <Social/>
          </div>

          <div className="
            absolute hidden sm:block
            top-[500px] sm:top-[600px] md:top-[700px] lg:top-[800px] xl:top-[880px] 2xl:top-[933px]
            -left-0
          ">
            <Label 
              text1="LIVE THE NEKO LIFE"
              text2="LIVE THE NEKO LIFE"
              text3="LIVE THE NEKO LIFE"
              text4="LIVE THE NEKO LIFE"
            />
          </div>
          <div className='absolute block sm:hidden top-[750px]'>
            <Label 
              text1="LIVE THE NEKO LIFE"
              text2="LIVE THE NEKO LIFE"
              text3="LIVE THE NEKO LIFE"
              text4="LIVE THE NEKO LIFE"
            />
          </div>
        </div>
    </section>
  )
}
