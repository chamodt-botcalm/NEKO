import React from "react";


interface LabelProps {
text: string;
}


export default function Label({ text }: LabelProps) {
return (
<div className=" bg-black text-white whitespace-nowrap overflow-hidden w-[1920px] h-[93px]">
<p className="inline-block animate-marquee">{text}</p>
</div>
);
}