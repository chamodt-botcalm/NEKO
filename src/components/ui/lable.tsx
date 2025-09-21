import React from "react";
import ellipse from '@/assets/images/Ellipse.png'
import styles from './label.module.css';


interface LabelProps {
    text1: string;
    text2: string;
    text3: string;
    text4: string;
}


export default function Label({ text1, text2, text3, text4 }: LabelProps) {
    const content = (
        <>
            <div className="flex items-center justify-center px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal gap-[8px] sm:gap-[10px] md:gap-[12px] my-auto
                    text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px]
                    leading-[28px] sm:leading-[36px] md:leading-[45px] lg:leading-[58px] xl:leading-[65px] 2xl:leading-[73px]">
                    <img src={ellipse} alt="" className="inline-block w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]" />
                    <span className="leading-trim-cap-height">{text1}</span>
                </p>
            </div>
            <div className="flex items-center justify-center px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal gap-[8px] sm:gap-[10px] md:gap-[12px] my-auto
                    text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px]
                    leading-[28px] sm:leading-[36px] md:leading-[45px] lg:leading-[58px] xl:leading-[65px] 2xl:leading-[73px]">
                    <img src={ellipse} alt="" className="inline-block w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]" />
                    <span className="leading-trim-cap-height">{text2}</span>
                </p>
            </div>
            <div className="flex items-center justify-center hidden sm:block px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal gap-[8px] sm:gap-[10px] md:gap-[12px] my-auto
                    text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px]
                    leading-[28px] sm:leading-[36px] md:leading-[45px] lg:leading-[58px] xl:leading-[65px] 2xl:leading-[73px]">
                    <img src={ellipse} alt="" className="inline-block w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]" />
                    <span className="leading-trim-cap-height">{text3}</span>
                </p>
            </div>
            <div className="flex items-center justify-center hidden sm:block px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal gap-[8px] sm:gap-[10px] md:gap-[12px] my-auto
                    text-[24px] sm:text-[32px] md:text-[40px] lg:text-[52px] xl:text-[58px] 2xl:text-[64px]
                    leading-[28px] sm:leading-[36px] md:leading-[45px] lg:leading-[58px] xl:leading-[65px] 2xl:leading-[73px]">
                    <img src={ellipse} alt="" className="inline-block w-[15px] sm:w-[20px] md:w-[25px] lg:w-[30px] xl:w-[35px] 2xl:w-[40px]" />
                    <span className="leading-trim-cap-height">{text4}</span>
                </p>
            </div>
        </>
    );

    return (
        <div className="bg-black text-white w-screen sm:w-full 2xl:w-[1920px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[85px] 2xl:h-[93px] overflow-hidden flex items-center">
            <div className={`inline-flex whitespace-nowrap items-center ${styles.slideContainer}`}>
                {content}
                 {/* Duplicate content for seamless loop */}
            </div>
        </div>
    );
}