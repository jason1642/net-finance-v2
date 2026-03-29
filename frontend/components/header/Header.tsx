import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
  <header className="bg-dark-background flex w-full max-w-full min-w-md mx-auto items-center justify-between py-4 px-8">
    <div className="text-brand-400">
        <h1 className="text-2xl font-normal text-white">Net Finance</h1>
    </div>
    <nav>
        <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-white">Portfolio</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Feed</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
        </ul>
    </nav>
  </header>);
};

export default Header;
