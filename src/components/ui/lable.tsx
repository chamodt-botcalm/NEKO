import React from "react";


interface LabelProps {
text1: string;
text2: string;

}


export default function Label({ text1, text2 }: LabelProps) {
return (
<div className=" bg-black text-white whitespace-nowrap overflow-hidden w-[1920px] h-[93px]">
<p className="inline-block animate-marquee">{text1}</p>
<p className="inline-block animate-marquee">{text2}</p>
</div>
);
}