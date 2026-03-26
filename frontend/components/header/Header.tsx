import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
  <header className="bg-dark-background fixed max-w-5xl min-w-md mx-auto flex items-center justify-between py-4 px-8">
    <div className="text-brand-400">
        <h1 className="text-2xl font-normal text-white">Net Finance</h1>
    </div>
    <div>
 
    </div>
  </header>);
};

export default Header;
