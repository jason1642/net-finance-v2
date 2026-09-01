import * as React from 'react';

interface IButtonProps {
    text: string,
    customOptions?: string
}

const Button: React.FunctionComponent<IButtonProps> = ({text, customOptions}) => {
  return (
    <button className={`${customOptions} bg-brand-400 text-sm text-black p-4 rounded-lg `}>
        {text}
    </button>
  );
};

export default Button;
