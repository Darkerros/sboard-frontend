import {DetailedHTMLProps, FC} from 'react';
import {styled} from "styled-components";

const ButtonComponent = styled.button`
  padding: 10px 10px;
  
  width: fit-content;
  
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;

  border: none;
  border-radius: 3px;
  background: #00a884;
  
  transition: .3s ease-in;
  
  &:hover {
    cursor: pointer;
    
    transform: scale(1.05);
  }
`

type ButtonAttr =  DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends ButtonAttr {}

const Button:FC<ButtonProps> = (props) => {
  return (<ButtonComponent {...props}/>);
};

export default Button;
