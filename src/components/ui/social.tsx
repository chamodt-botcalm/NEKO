import React from 'react'
import telegrame from '../../assets/images/telegrame.png'
import twitter from '../../assets/images/twitter.png'
import icon from '../../assets/images/icon.png'
import vector from '../../assets/images/Vector.png'

export default function Social() {

    const icons=[
        {
            image1: <img src={telegrame} alt="1" />,
            
        },
        {
            image1: <img src={twitter} alt="2" />
        },
        {
            image1: <img src={icon} alt="3" />
        },
        {
            image1: <img src={vector} alt="4" />
        }
        
    ]

  return (
   <div className='flex gap-[8px] sm:gap-[15px] md:gap-[20px] lg:gap-[22px] xl:gap-[24px] 2xl:gap-[26px] 
     w-[229px] sm:w-[250px] md:w-[300px] lg:w-[340px] xl:w-[355px] 2xl:w-[371px]
     h-[50px] sm:h-[50px] md:h-[58px] lg:h-[65px] xl:h-[69px] 2xl:h-[73px]'>
    {
        icons.map((icon, index)=>(
            <div key={index} className='bg-[#83708A] rounded-full
              p-[8px] sm:p-[13px] md:p-[16px] lg:p-[19px] xl:p-[20px] 2xl:p-[22px]
              w-[50px] sm:w-[50px] md:w-[58px] lg:w-[65px] xl:w-[69px] 2xl:w-[73px]
              h-[50px] sm:h-[50px] md:h-[58px] lg:h-[65px] xl:h-[69px] 2xl:h-[73px]
            '>
                <div className="w-full h-full flex items-center justify-center">
                    <img src={icon.image1.props.src} alt={icon.image1.props.alt} className="
                      w-[20px] sm:w-[22px] md:w-[24px] lg:w-[26px] xl:w-[28px] 2xl:w-[30px]
                      h-[20px] sm:h-[22px] md:h-[24px] lg:h-[26px] xl:h-[28px] 2xl:h-[30px]
                    "/>
                </div>
            </div>
        ))
    }
   </div>
  )
}
