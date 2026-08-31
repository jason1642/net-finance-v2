import Button from '@/components/button/Button';
import Image from 'next/image';
import * as React from 'react';

interface ISecondSectionProps {
    
}

const listContent = [
    {
        title: "Discover",
        description: "Explore stocks, ETFs, and market movers in real time"
    },
    {
        title: "Analyze",
        description: "Deep-dive into financials, estimates, and peer comparisons"
    },
    {
        title: "Track",
        description: "Monitor your porfolio performance across every asset"
    },
    {
        title: "Act",
        description: "Execute trades and set alerts at the right moment"
    }
]

const SecondSection: React.FunctionComponent<ISecondSectionProps> = (props) => {
  return (
    <div className="flex flex-col p-12 w-full m-auto mt-8 max-w-7xl min-h-75 bg-grey">
      {/* Header */}
    <div className="flex text-4xl text-center w-[60%] font-semibold mx-auto p-4 pb-0">
        Everything you need to invest smarter, faster, and with confidence
    </div>

       
          {/* Content wrapper */}
        <div className="flex flex-row w-full ">

        {/* Image wrapper */}
        <div className="flex relative w-[50%] h-auto  items-center border-green-300" >
            <Image 
                className='object-contain'
                src="/../images/mobile-preview.png"
                alt="mobile preview"
                fill
            />

        </div>
    {/* List wrapper */}
        <div className=" w-[50%] pt-20">
            <ul>
                {listContent.map((item, index)=>(
                    <li key={index} className="mb-8">
                        <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
                        <p className="text-lg text-gray-200">{item.description}</p>
                    </li>
                ))}
            </ul>
            <Button text="Explore features"/>
        </div>  
         </div>
    </div>
  );
};

export default SecondSection;
