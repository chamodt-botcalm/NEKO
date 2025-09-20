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
            <div className="flex items-center justify-center px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal text-[64px] leading-[73px] gap-[12px] my-auto">
                    <img src={ellipse} alt="" className="inline-block" />
                    <span className="leading-trim-cap-height">{text1}</span>
                </p>
            </div>
            <div className="flex items-center justify-center px-6">
                <p className="flex items-center font-['Madimi_One'] font-normal text-[64px] leading-[73px] gap-[12px] my-auto">
                    <img src={ellipse} alt="" className="inline-block" />
                    <span className="leading-trim-cap-height">{text1}</span>
                </p>
            </div>
        </>
    );

    return (
        <div className="bg-black text-white w-[1920px] h-[93px] overflow-hidden flex items-center">
            <div className={`inline-flex whitespace-nowrap items-center ${styles.slideContainer}`}>
                {content}
                {content} {/* Duplicate content for seamless loop */}
            </div>
        </div>
    );
}