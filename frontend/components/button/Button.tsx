import * as React from 'react';

interface IButtonProps {
    text: string,
    customOptions?: string
}

const Button: React.FunctionComponent<IButtonProps> = ({text, customOptions}) => {
  return (
    <button className={`bg-brand-400 text-sm text-black pr-3 pl-3 pt-1 pb-1 rounded-md ${customOptions}`}>
        {text}
    </button>
  );
};

export default Button;
