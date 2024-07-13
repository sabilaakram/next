"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { TiTick } from 'react-icons/ti';

const Timeline = () => {
  const [completedEvents, setCompletedEvents] = useState([true, true, false, true, true, false, true, false, false, true, true, true]);

  const events = [
    { date: 'Dec 2016', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Feb 2017', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Apr 2017', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Aug 2017', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Nov 2017', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Jan 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Feb 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Mar 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Jun 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Sep 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Oct 2018', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
    { date: 'Jan 2019', text: 'Lorem ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.' },
  ];

  const handleEventClick = (index: number) => {
    const newCompletedEvents = [...completedEvents];
    newCompletedEvents[index] = !newCompletedEvents[index];
    setCompletedEvents(newCompletedEvents);
  };

  return (
    <div className="relative py-20">
      <Image
        src="/mountains.jpg"
        objectFit="cover"
        className="z-0"
        alt="Background"
        style={{ opacity: 0.75 }}
        fill={true}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900 opacity-75 z-0"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-center text-white font-bold text-[30px]">Roadmap</h1>
        <h2 className="text-center text-white md:pb-20 pb-10 md:font-extralight font-light md:text-[50px] text-[40px]">Our Strategy and Project Plan</h2>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 md:p-10 bg-opacity-55 z-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative pl-10 pr-16 border-l-2 border-green-600"
            onClick={() => handleEventClick(index)}
          >
            <div
              className={`absolute -left-6 -top-5 w-12 h-12 hover:bg-[#648284] ${completedEvents[index] ? 'bg-[#2F5664]' : 'bg-gray-500'} rounded-full flex items-center justify-center`}
            >
              {completedEvents[index] && <TiTick color='#02DE8F' size={20} />}
            </div>
            <div className="font-bold text-green-400">{event.date}</div>
            <div className="mt-2 text-gray-200 text-[12px] font-Montserrat">{event.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
