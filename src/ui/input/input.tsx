import {styled} from "styled-components";
import {FC} from "react";

const InputComponent = styled.input`
  border-radius: 2px;
  border: none;

  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px 5px 15px;

  background: #efefef;

  &:focus {
    outline: solid 1px #e1e1e1;
  }
`

type InputAttr = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends InputAttr {
  type: 'text' | 'number' | 'email' | 'password';
}

const Input:FC<InputProps> = (props) => {
  return (
    <InputComponent {...props}/>
  );
};

export default Input;
