import * as React from 'react';
import Button from '../components/button/Button'
interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className="m-auto flex flex-col items-center mt-12 mb-12">
        <h3 className="p-4">Ready to operationalize your financial goals?</h3>
        <Button 
        text={"Request a demo"} 
        customOptions={"p-[10px]"}  
        />
    </div>
  );
};

export default Footer;
