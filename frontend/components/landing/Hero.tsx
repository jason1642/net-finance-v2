import * as React from 'react';
import Button from '../button/Button';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div className={"w-full"}>
        {/* Intro container */}
        <div className={"flex flex-col items-center w-full max-w-7xl mt-10"}>
    {/* Title */}
            <h1 className="text-7xl font-medium text-center text-white max-w-5xl mb-4 w-full">Cutting edge investment tools and data. For Everyone.</h1>
    {/* Subtitle */}
            <p className="text-md text-center text-gray-300 max-w-5xl mb-8">Financial data and analytics platform that provides investors with the tools and insights they need to make informed investment decisions.</p>
    {/* Button Wrapper */}
    <nav className="flex justify-center mx-auto ">
        <Button text={"Request a demo"} customOptions={"rounded-xs mr-4"} />
        <Button text={"Explore the platform"} customOptions={"rounded-xs"}/>
    </nav>
        </div>
       
    </div>
  );
};

export default Hero;
