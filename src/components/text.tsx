import React from 'react';

interface TextProps {
    nums: string;
    title: string;
    description: string;
    reverse?: boolean;
}

function Text({ nums, title, description, reverse = false }: TextProps) {
    const numsClassName = `absolute md:-top-10 -top-5 left-0 text-[#12232f] md:text-[80px] text-[40px] opacity-15 ${reverse ? 'right-0 left-auto' : 'left-0'}`;
    const titleClassName = `relative md:z-12  md:text-[30px] text-[20px] md:font-bold font-bold  ${reverse ? 'ml-4' : 'mr-4'}`;

    return (
        <div className={` items-center ${reverse ? 'flex-row-reverse text-right' : 'text-left'}`}>
            <div className="relative font-bold">
                <span className={numsClassName}>{nums}</span>
                <p className={titleClassName}>{title}</p>
            </div>
            <div>
                <p className='md:text-[15px] text-[12px] md:font-light font-light text-[#2b353f] md:pt-5 pt-3'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Text;
