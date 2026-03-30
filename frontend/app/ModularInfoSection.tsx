import Image from 'next/image';
import * as React from 'react';

interface IModularInfoSectionProps {
}


const listContent = [
    {
        title: "Clarity", 
        description: "Your portfolio, at a glance. We believe smarter investing starts with clearer data - traked, visualized, and always up to date.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

    },
    {
        title: "Overview",
        description: "Markets are connected. We build tools that help investors see the relationships between sectors, assets, and global market movements.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>


    },
    {
        title: "Tracking",
        description: "We help you track real portfolo performance, turning market noise into measurable and actionable insights.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
</svg>


    }
]

const ModularInfoSection: React.FunctionComponent<IModularInfoSectionProps> = (props) => {
  return (
    <div className="w-[80%] mx-auto flex flex-col items-center mb-5">
        {/* Header wrapper */}
        <div className="mb-6">
            <p className="text-7xl font-medium text-center text-white max-w-5xl w-full mt-20">Built for investors</p>
            <p className="text-7xl font-medium text-center text-white max-w-5xl w-full ">Designed for performance</p>

        </div>

        {/* Modular section */}
        <div className="flex flex-row gap-5">
            {
                listContent.map((item, index) =>
                <div key={index} className="flex flex-col p-8 w-[30%] bg-surface rounded-xl">
                    {item.icon}
                    <p className="mt-3 font-bold text-xl">{item.title}</p>
                    <p className="text-xl leading-[120%]">{item.description}</p>
                </div>
                )
            }
        </div>
    </div>
  );
};

export default ModularInfoSection;
