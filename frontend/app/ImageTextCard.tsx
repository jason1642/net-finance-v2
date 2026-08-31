import * as React from 'react';
import Image from 'next/image'

interface IImageTextCardProps {
}

const ImageTextCard: React.FunctionComponent<IImageTextCardProps> = () => {

  return (
    <div className="flex flex-row p-8 w-[80%] m-auto mt-8 mb-8 max-w-7xl min-h-65 bg-surface rounded-xl">
        <div className="flex w-[50%] relative items-center overflow-hidden">
             <Image 
                className='object-contain w-[150%] scale-[2.7] overflow-hidden'
                src="/../images/D9Y85aGWkAANS-x.jpeg"
                alt="mobile preview"
                fill
            />
        </div>
           

            <div className="flex flex-col items-center w-[50%] h-full ">
                <p className="w-full pl-5 text-left font-bold text-lg">Why choose Net Finance?</p>
           
            <p className=" p-4 text-left font-extralight text-md ">
                With fragmented data and growing reporting pressure, Acme turned to Aetherfield to streamline their ESG workflows. The result? Faster decisions, fewer spreadsheets, and 34% more coverage.
                </p> 
            </div>

         </div>
  );
};

export default ImageTextCard;
