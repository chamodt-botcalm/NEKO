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
   <div className='flex gap-[26px] w-[371px] h-[73px]'>
    {
        icons.map((icon, index)=>(
            <div key={index} className=' bg-[#83708A]  rounded-[37px] p-[22px]'>
                <div>{icon.image1}</div>
            </div>
        ))
    }
   </div>
  )
}
