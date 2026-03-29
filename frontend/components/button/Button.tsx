import * as React from 'react';

interface IButtonProps {
    text: string,
    customOptions?: string
}

const Button: React.FunctionComponent<IButtonProps> = ({text, customOptions}) => {
  return (
    <button className={`bg-brand-400 text-sm text-black p-4 rounded-md h-14 ${customOptions}`}>
        {text}
    </button>
  );
};

export default Button;
